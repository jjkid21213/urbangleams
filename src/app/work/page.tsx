import type { Metadata } from "next";
import Link from "next/link";
import { SiteMock } from "@/components/SiteMock";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Sample work for a salon, a cafe, and a trade business.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-gleam">Work</p>
      <h1 className="mt-4 max-w-2xl font-serif text-5xl italic md:text-6xl">
        Three problems. Three sites.
      </h1>
      <p className="mt-5 max-w-xl text-mute">
        Sample projects while client work is underway. The numbers on each page are goals, not claimed results.
      </p>
      <div className="mt-16 grid gap-14">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="grid items-center gap-8 border-t border-line pt-10 md:grid-cols-2"
          >
            <SiteMock theme={study.theme} />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                {study.city} · {study.industry}
              </p>
              <h2 className="mt-2 font-serif text-4xl">{study.name}</h2>
              <p className="mt-3 text-mute">{study.headline}</p>
              <span className="mt-6 inline-block text-sm text-gleam">Read the case</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
