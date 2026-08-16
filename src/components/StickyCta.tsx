"use client";

import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a className="btn flex-1" href={site.phoneHref}>
          Call
        </a>
        <a className="btn-line flex-1 justify-center" href={`mailto:${site.email}`}>
          Email
        </a>
      </div>
    </div>
  );
}
