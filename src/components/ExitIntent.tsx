"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (sessionStorage.getItem("ug-exit")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 8) return;
      sessionStorage.setItem("ug-exit", "1");
      setOpen(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 md:items-center">
      <div className="w-full max-w-md border border-line bg-paper p-6">
        <p className="font-display text-2xl font-semibold">Not ready to book?</p>
        <p className="mt-2 text-sm text-mute">
          Take the prep checklist. Or email when you are. No drip sequence — I do not run one.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn" href="/checklist">
            Open the checklist
          </a>
          <a className="btn-line" href={`mailto:${site.email}`}>
            Email Justin
          </a>
        </div>
        <button type="button" className="mt-4 text-sm text-mute" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
