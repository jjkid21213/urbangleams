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
  return {
    title: `${study.name} (showcase)`,
    description: `${study.headline} Showcase concept — not a real client.`,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Link href="/work" className="text-sm text-mute hover:text-ink">
          ← Work
        </Link>
        <p className="mt-8 text-sm text-mute">
          {study.city} · {study.industry} · showcase concept
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {study.headline}
        </h1>
        <p className="mt-4 text-sm text-accent">{study.note}</p>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          <SiteMock theme={study.theme} title={study.name} />
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-xl font-semibold">The problem this sample solves</h2>
              <p className="mt-3 text-mute">{study.problem}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold">What the sample shows</h2>
              <p className="mt-3 text-mute">{study.built}</p>
            </section>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold">Pages in the concept</h2>
            <ul className="mt-3 space-y-1 text-mute">
              {study.pages.map((page) => (
                <li key={page}>{page}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">Built with</h2>
            <ul className="mt-3 space-y-1 text-mute">
              {study.stack.map((item) => (
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
