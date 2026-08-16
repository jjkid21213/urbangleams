import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  business?: string;
  package?: string;
  message?: string;
  website?: string;
};

const PUBLIC_INBOX = "justinbusiness124@gmail.com";
const VERIFIED_INBOX = "justinmureithi24@gmail.com";
const hits = new Map<string, { n: number; t: number }>();

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clip(value: string, max: number) {
  return value.trim().slice(0, max);
}

function parseEmails(value: string | undefined) {
  return (value ?? "")
    .split(/[,;]/)
    .map((item) => item.trim().toLowerCase())
    .filter(isEmail);
}

function unique(list: string[]) {
  return [...new Set(list)];
}

function clientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function rateLimited(ip: string) {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now - row.t > 15 * 60 * 1000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  row.n += 1;
  return row.n > 8;
}

async function envValue(name: string) {
  const fromProcess = process.env[name];
  if (fromProcess) return fromProcess;
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = await getCloudflareContext({ async: true });
    const value = (ctx.env as Record<string, unknown>)[name];
    return typeof value === "string" && value ? value : undefined;
  } catch {
    return undefined;
  }
}

async function sendResend(opts: {
  key: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: opts.from,
      to: [opts.to],
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    }),
  });
  return res.ok;
}

async function sendWeb3Forms(key: string, payload: Record<string, string>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: key, ...payload }),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: boolean };
  return res.ok && json.success === true;
}

async function sendFormSubmit(to: string, payload: Record<string, string>) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "UrbanGleamsContact/1.0",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      business: payload.business,
      need: payload.package,
      message: payload.message,
      _subject: payload._subject,
      _captcha: "false",
      _template: "box",
    }),
  });
  if (res.ok) return true;
  const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
  return json.success === true || json.success === "true";
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many notes. Email or call instead." }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (clip(String(body.website ?? ""), 80)) {
    return NextResponse.json({ ok: true, emailed: true });
  }

  const name = clip(String(body.name ?? ""), 80);
  const email = clip(String(body.email ?? ""), 120);
  const message = clip(String(body.message ?? ""), 4000);
  const business = clip(String(body.business ?? ""), 120);
  const pkg = clip(String(body.package ?? ""), 40);

  if (name.length < 2 || !isEmail(email) || message.length < 8) {
    return NextResponse.json(
      { error: "Name, a real email, and a short message are required." },
      { status: 400 },
    );
  }

  const resendKey = await envValue("RESEND_API_KEY");
  const web3Key = await envValue("WEB3FORMS_ACCESS_KEY");
  const from = (await envValue("CONTACT_FROM")) || "Urban Gleams <onboarding@resend.dev>";
  const fallback = parseEmails(await envValue("CONTACT_FALLBACK"))[0] || VERIFIED_INBOX;
  const recipients = unique([...parseEmails(await envValue("CONTACT_TO")), PUBLIC_INBOX, fallback]);
  const subject = `Enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    business ? `Business: ${business}` : null,
    pkg ? `Package: ${pkg}` : null,
    "",
    message,
    "",
    `Reply to ${email}. Public inbox: ${PUBLIC_INBOX}.`,
  ]
    .filter(Boolean)
    .join("\n");

  let delivered = false;

  if (resendKey) {
    for (const to of recipients) {
      if (await sendResend({ key: resendKey, from, to, replyTo: email, subject, text })) {
        delivered = true;
      }
    }
  }

  if (!delivered && web3Key) {
    delivered = await sendWeb3Forms(web3Key, {
      subject,
      from_name: name,
      email,
      message: text,
    });
  }

  if (!delivered) {
    for (const to of unique([PUBLIC_INBOX, fallback])) {
      if (await sendFormSubmit(to, { name, email, business, package: pkg, message, _subject: subject })) {
        delivered = true;
      }
    }
  }

  if (!delivered) {
    return NextResponse.json(
      {
        ok: false,
        emailed: false,
        error: "Could not send from the site. Use the email link so the note still arrives.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, emailed: true });
}
