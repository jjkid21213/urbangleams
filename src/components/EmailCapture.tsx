"use client";

import { useState } from "react";
import { site } from "@/lib/site";

function checklistMailto(address: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent("Website prep checklist")}&body=${encodeURIComponent(`Please send the checklist.\n\nMy email: ${address}`)}`;
}

export function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const next = String(data.email ?? "");
    setEmail(next);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Checklist",
          email: next,
          message: "Send me the website prep checklist when you can.",
          package: "checklist",
        }),
      });
      const json = (await res.json()) as { emailed?: boolean };
      if (res.ok && json.emailed) {
        setStatus("ok");
        return;
      }
      setStatus("err");
      window.location.href = checklistMailto(next);
    } catch {
      setStatus("err");
      window.location.href = checklistMailto(next);
    }
  }

  if (status === "ok") {
    return <p>Sent. The checklist is also on the site — print /checklist anytime.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <input
        required
        type="email"
        name="email"
        className="field flex-1"
        placeholder="Your email"
        autoComplete="email"
      />
      <button className="btn" type="submit">
        Keep the checklist — I’ll email you
      </button>
      {status === "err" ? (
        <a className="btn-line self-center" href={checklistMailto(email)}>
          Email {site.email} instead
        </a>
      ) : null}
    </form>
  );
}
