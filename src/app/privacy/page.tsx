import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Urban Gleams handles enquiries and site data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-4 text-sm text-mute">Australia. Last updated August 2026.</p>
      <div className="mt-8 space-y-4 text-mute">
        <p>
          If you email, call, or use the form, I get your name, email, and whatever you wrote. I use
          that to reply about the job. I do not sell lists.
        </p>
        <p>
          The site is hosted on Cloudflare. They see normal server logs (IP, pages). I do not run a
          tracking pixel for ads.
        </p>
        <p>
          Hosting and email tools may store a copy so the form can arrive. If you want something
          deleted, email {site.email}.
        </p>
        <p>This is a small studio notice, not a 20-page policy. Ask if you need more detail.</p>
      </div>
    </div>
  );
}
