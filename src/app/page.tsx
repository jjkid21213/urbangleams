import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { SiteMock } from "@/components/SiteMock";
import { aboutShort } from "@/lib/about";
import { faqs } from "@/lib/faq";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pt-20">
        <p className="text-sm text-mute">{site.city} · custom websites</p>
        <h1 className="rise mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          A site that gets you the call, not just the look.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">
          I design and build custom websites for cafes, salons, clinics, and trades.
          Fast on a phone. Easy to book. Made so people actually get in touch.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a className="btn" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
          <a className="btn-line" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Who you’re talking to</h2>
            <p className="mt-3 text-mute">{aboutShort}</p>
          </div>
          <Link href="/about" className="mt-4 btn-line md:mt-0">
            About me
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Showcase concepts</h2>
            <p className="mt-2 text-sm text-mute">
              Sample sites I designed to show the work. Not real clients.
            </p>
          </div>
          <Link href="/work" className="hidden text-sm btn-line md:inline-flex">
            All samples
          </Link>
        </div>
        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group">
              <SiteMock theme={study.theme} title={study.name} />
              <p className="mt-8 text-sm text-mute">
                {study.city} · {study.industry} · showcase
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold group-hover:text-accent">
                {study.name}
              </h3>
              <p className="mt-2 text-mute">{study.headline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What it costs</h2>
          <p className="mt-2 max-w-xl text-mute">
            AUD. Invoice after we agree the job. The price is for a site that can take calls and bookings — not a pretty PDF.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`border bg-paper p-6 ${pkg.featured ? "border-ink" : "border-line"}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                  <p className="text-lg font-semibold">
                    {pkg.price}
                    {pkg.period ?? ""}
                  </p>
                </div>
                <p className="mt-1 text-sm text-mute">{pkg.timeline}</p>
                <p className="mt-4">{pkg.outcome}</p>
                <Link href="/services" className="mt-5 inline-block text-sm btn-line">
                  What’s in it
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight">How a job runs</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold">Talk</h3>
            <p className="mt-2 text-mute">
              Email or call. What you sell, who walks in, why the current site is quiet.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Build</h3>
            <p className="mt-2 text-mute">
              You see real pages, not a moodboard. Copy and layout together.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Live</h3>
            <p className="mt-2 text-mute">
              On your domain, with a form that arrives and a number people can tap.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Questions</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-xl font-semibold">{item.q}</h3>
                <p className="mt-2 text-mute">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <h2 className="font-display text-2xl font-semibold">Need a specific job?</h2>
          <p className="mt-2 text-sm text-mute">
            <Link href="/services" className="btn-line">
              Full pricing
            </Link>
            <span className="mx-2">·</span>
            <Link href="/checklist" className="btn-line">
              Prep checklist
            </Link>
          </p>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
