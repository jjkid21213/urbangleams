"use client";

import { useState } from "react";
import { SelectMenu } from "./SelectMenu";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";

type Draft = {
  name: string;
  email: string;
  business: string;
  package: string;
  message: string;
};

const emptyDraft: Draft = { name: "", email: "", business: "", package: "", message: "" };

function enquiryMailto(draft: Draft) {
  const body = [
    `Name: ${draft.name}`,
    `Email: ${draft.email}`,
    draft.business ? `Business: ${draft.business}` : "",
    draft.package ? `Package: ${draft.package}` : "",
    "",
    draft.message,
  ]
    .filter((line, i, all) => line !== "" || (i > 0 && all[i - 1] !== ""))
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry from ${draft.name || "the site"}`)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");
  const [pkg, setPkg] = useState("");
  const [draft, setDraft] = useState<Draft>(emptyDraft);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const next: Draft = {
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      business: String(data.business ?? ""),
      package: String(data.package ?? pkg),
      message: String(data.message ?? ""),
    };
    setDraft(next);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...next, website: String(data.website ?? "") }),
      });
      const json = (await res.json()) as { ok?: boolean; emailed?: boolean; error?: string };
      if (!res.ok || !json.emailed) {
        setStatus("err");
        setError(json.error || "Could not send from the site.");
        window.location.href = enquiryMailto(next);
        return;
      }
      setStatus("ok");
      form.reset();
      setPkg("");
    } catch {
      setStatus("err");
      setError("Network error. Use the email link so the note still arrives.");
      window.location.href = enquiryMailto(next);
    }
  }

  if (status === "ok") {
    return <p className="ug-card p-6">Sent. I’ll reply on a weekday to {site.email}.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-4">
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Name</span>
        <input required name="name" className="field" autoComplete="name" maxLength={80} />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Email</span>
        <input required type="email" name="email" className="field" autoComplete="email" maxLength={120} />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Business</span>
        <input name="business" className="field" maxLength={120} />
      </label>
      <SelectMenu
        label="What you need"
        name="package"
        value={pkg}
        onChange={setPkg}
        options={[
          { value: "", label: "Not sure yet" },
          ...packages.map((item) => ({ value: item.id, label: item.name, hint: item.price })),
        ]}
      />
      <label className="absolute left-[-10000px] h-px w-px overflow-hidden">
        Website
        <input tabIndex={-1} autoComplete="off" name="website" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Tell me about the job</span>
        <textarea required name="message" rows={5} className="field resize-y" minLength={8} maxLength={4000} />
      </label>
      {status === "err" ? (
        <div className="grid gap-2">
          <p className="text-sm text-accent">{error}</p>
          <a className="btn w-fit" href={enquiryMailto(draft)}>
            Email {site.email} instead
          </a>
          <p className="text-sm text-mute">That opens your mail app with the note already filled in.</p>
        </div>
      ) : null}
      <button type="submit" className="btn w-fit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
