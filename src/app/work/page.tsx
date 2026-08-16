import type { Metadata } from "next";
import Link from "next/link";
import { SiteMock } from "@/components/SiteMock";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Showcase concept websites for a cafe, salon, clinic, and trade. Samples, not client case studies.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 max-w-xl text-lg text-mute">
        These are showcase concepts — invented businesses I designed to show how a custom site should look and work. Not real clients. No made-up revenue.
      </p>
      <div className="mt-14 grid gap-16">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="grid items-center gap-8 border-t border-line pt-10 md:grid-cols-2"
          >
            <SiteMock theme={study.theme} title={study.name} />
            <div>
              <p className="text-sm text-mute">
                {study.city} · {study.industry} · showcase concept
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold">{study.name}</h2>
              <p className="mt-3 text-mute">{study.headline}</p>
              <span className="mt-5 inline-block text-sm btn-line">Open sample</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
