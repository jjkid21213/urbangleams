"use client";

import { useState } from "react";
import { packages, type PackageId } from "@/lib/packages";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [emailed, setEmailed] = useState(true);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; emailed?: boolean; error?: string };
      if (!res.ok) {
        setStatus("err");
        setError(json.error || "Could not send. Email me instead.");
        return;
      }
      setEmailed(Boolean(json.emailed));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setError("Network error. Use the email link.");
    }
  }

  if (status === "ok") {
    return (
      <p className="border border-line bg-panel p-6 text-paper">
        {emailed
          ? "Thanks. I will reply within one business day."
          : `Thanks. If this does not land in my inbox, send the same note to ${site.email}.`}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Name</span>
        <input required name="name" className="field" autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Email</span>
        <input required type="email" name="email" className="field" autoComplete="email" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Business</span>
        <input name="business" className="field" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">Package</span>
        <select name="package" className="field" defaultValue="">
          <option value="">Not sure yet</option>
          {packages.map((p) => (
            <option key={p.id} value={p.id as PackageId}>
              {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-mute">What do you need?</span>
        <textarea required name="message" rows={5} className="field resize-y" />
      </label>
      {status === "err" ? <p className="text-sm text-gleam">{error}</p> : null}
      <button type="submit" className="btn-gleam w-fit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
