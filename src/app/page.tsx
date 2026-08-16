import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { SiteMock } from "@/components/SiteMock";
import { faqs } from "@/lib/faq";
import { packages } from "@/lib/packages";
import { caseStudies } from "@/lib/work";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rotate-12 bg-[radial-gradient(circle,rgba(201,165,106,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
          <p className="text-xs uppercase tracking-[0.28em] text-gleam">
            Web studio · Australia
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-paper md:text-7xl">
            Websites that make city brands{" "}
            <span className="italic text-gleam">gleam</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute">
            I build high-converting sites for cafes, salons, clinics, and trades.
            Fast. Expensive-looking. Built to get the enquiry — not a pretty brochure.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn-gleam">
              Book a 15-minute call
            </Link>
            <Link href="/work" className="btn-ghost">
              See the work
            </Link>
          </div>
        </div>
        <div className="gleam-rule" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gleam">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl italic">Spec sites. Real problems.</h2>
          </div>
          <Link href="/work" className="hidden text-sm text-mute hover:text-paper md:block">
            All work
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group">
              <SiteMock theme={study.theme} />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mute">
                {study.city} · {study.industry}
              </p>
              <h3 className="mt-1 font-serif text-2xl group-hover:text-gleam">{study.name}</h3>
              <p className="mt-2 text-sm text-mute">{study.headline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-gleam">Packages</p>
          <h2 className="mt-3 max-w-lg font-serif text-4xl italic">Prices on the page. No theatre.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col border p-6 ${
                  pkg.featured ? "border-gleam/50 bg-ink" : "border-line"
                }`}
              >
                <p className="text-sm text-mute">{pkg.name}</p>
                <p className="mt-3 font-serif text-4xl text-paper">
                  {pkg.price}
                  {pkg.period ? (
                    <span className="text-lg text-mute">{pkg.period}</span>
                  ) : null}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gleam">{pkg.timeline}</p>
                <p className="mt-4 text-sm text-mute">{pkg.summary}</p>
                <Link href="/services" className="mt-8 text-sm text-paper underline-offset-4 hover:underline">
                  What’s included
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-gleam">Process</p>
        <h2 className="mt-3 font-serif text-4xl italic">Four steps. Then you are live.</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {[
            ["01", "Discover", "A call. What you sell, who walks in, why the current site is quiet."],
            ["02", "Design", "Layout and words together. You see a real page, not a moodboard."],
            ["03", "Ship", "Domain, form, mobile. Live on a URL you can send from your phone."],
            ["04", "Care", "Optional. Updates so the site does not age in a drawer."],
          ].map(([n, t, d]) => (
            <li key={n}>
              <p className="text-gleam">{n}</p>
              <h3 className="mt-2 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-gleam">FAQ</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-serif text-2xl">{item.q}</h3>
                <p className="mt-3 text-mute">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
