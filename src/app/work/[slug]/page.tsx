import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBar } from "@/components/CtaBar";
import { SiteMock } from "@/components/SiteMock";
import { caseStudies, getCaseStudy } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Work" };
  return { title: study.name, description: study.headline };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/work" className="text-sm text-mute hover:text-paper">
          ← Work
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-gleam">
          {study.city} · {study.industry}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl italic md:text-6xl">
          {study.headline}
        </h1>
        <p className="mt-4 text-sm text-mute">{study.note}</p>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          <SiteMock theme={study.theme} />
          <div className="space-y-8">
            <section>
              <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">Problem</h2>
              <p className="mt-3 text-mute">{study.problem}</p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">What I built</h2>
              <p className="mt-3 text-mute">{study.built}</p>
            </section>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">Pages</h2>
            <ul className="mt-3 space-y-1 text-paper">
              {study.pages.map((page) => (
                <li key={page}>{page}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">Stack</h2>
            <ul className="mt-3 space-y-1 text-paper">
              {study.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gleam">Targets</h2>
            <ul className="mt-3 space-y-1 text-mute">
              {study.targets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <CtaBar />
    </>
  );
}
