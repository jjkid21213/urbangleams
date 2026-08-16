import type { Metadata } from "next";
import Link from "next/link";
import { SampleFrame } from "@/components/SampleFrame";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Three showcase websites you can click through. Cafe, treasury product, and a boutique.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 max-w-xl text-lg text-mute">
        Three full sample sites. Click in and walk around. They are showcase concepts — not real clients.
      </p>
      <div className="mt-14 grid gap-16">
        {caseStudies.map((study) => (
          <article key={study.slug} className="border-t border-line pt-10">
            <SampleFrame src={study.href} title={study.name} />
            <p className="mt-6 text-sm text-mute">
              {study.city} · {study.industry} · showcase
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{study.name}</h2>
            <p className="mt-3 max-w-xl text-mute">{study.headline}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href={study.href} className="btn">
                Browse {study.name}
              </Link>
              <Link href={`/work/${study.slug}`} className="btn-line">
                Notes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
