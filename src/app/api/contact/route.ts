import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  business?: string;
  package?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const business = String(body.business ?? "").trim();
  const pkg = String(body.package ?? "").trim();

  if (name.length < 2 || !isEmail(email) || message.length < 8) {
    return NextResponse.json(
      { error: "Name, a real email, and a short message are required." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO || "justinbusiness124@gmail.com";
  const key = process.env.RESEND_API_KEY;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    business ? `Business: ${business}` : null,
    pkg ? `Package: ${pkg}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!key) {
    return NextResponse.json({ ok: true, emailed: false });
  }

  const from = process.env.CONTACT_FROM || "Urban Gleams <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Enquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Could not send email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, emailed: true });
}
