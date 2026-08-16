import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "How Urban Gleams jobs are scoped, paid, and handed over.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Terms</h1>
      <p className="mt-4 text-sm text-mute">Australia. Last updated August 2026.</p>
      <div className="mt-8 space-y-4 text-mute">
        <p>
          A job starts when we both agree a written scope and you pay the first half. The rest is due
          when the site is live on your domain.
        </p>
        <p>
          Package prices cover the scope. Work outside it is {site.hourly}/hr or a new quote. Two
          revision rounds are in the package. Unlimited revisions are not.
        </p>
        <p>
          You own the site and content when invoices are paid. Showcase concepts on this website are
          not client work and are not a promise of results.
        </p>
        <p>
          I do not guarantee search rankings or a number of leads. I do the work that can get the
          enquiry.
        </p>
        <p>
          Questions: {site.email} · {site.phone}
        </p>
      </div>
    </div>
  );
}
