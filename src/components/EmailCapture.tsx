"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Checklist",
          email: data.email,
          message: "Send me the website prep checklist when you can.",
          package: "checklist",
        }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return <p>Noted. The checklist is also on the site — print /checklist anytime.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        required
        type="email"
        name="email"
        className="field flex-1"
        placeholder="Your email"
        autoComplete="email"
      />
      <button className="btn" type="submit">
        Keep the checklist
      </button>
      {status === "err" ? (
        <a className="btn-line self-center" href={`mailto:${site.email}`}>
          Email instead
        </a>
      ) : null}
    </form>
  );
}
