import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBar } from "@/components/CtaBar";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Services" };
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <Link href="/services" className="text-sm text-mute hover:text-ink">
          ← Services
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {service.h1}
        </h1>
        <p className="mt-4 text-lg text-mute">{service.outcome}</p>
        <ul className="mt-8 space-y-2">
          {service.points.map((p) => (
            <li key={p}>— {p}</li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-2xl font-semibold">How it runs</h2>
        <ol className="mt-4 space-y-2 text-mute">
          {service.process.map((p, i) => (
            <li key={p}>
              {i + 1}. {p}
            </li>
          ))}
        </ol>
        <h2 className="mt-12 font-display text-2xl font-semibold">Questions</h2>
        <div className="mt-4 space-y-6">
          {service.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-1 text-mute">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${site.email}?subject=${encodeURIComponent(service.title)}`}>
            Email about this
          </a>
          <a className="btn-line" href={site.phoneHref}>
            {site.phone}
          </a>
        </div>
      </article>
      <CtaBar />
    </>
  );
}
