import type { Metadata } from "next";
import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { PricingCalculator } from "@/components/PricingCalculator";
import { compareRows } from "@/lib/compare";
import { objections } from "@/lib/objections";
import { addons, packages } from "@/lib/packages";
import { bundles, rates } from "@/lib/rates";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { included, notIncluded, timeline, whyChoose } from "@/lib/trust";

export const metadata: Metadata = {
  title: "Services & pricing",
  description:
    "Custom website packages from $2,400. $85/hr outside scope. Australia. Agency-quality work without agency overhead.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight">
          You are buying an enquiry machine, not a pile of pages.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-mute">
          AU studios often sit $3k–$15k for a real site. I sit under a full agency and above a theme flip.
          Fixed packages. {site.hourly}/hr only when we leave the scope.
        </p>

        <div className="mt-12 grid gap-4">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`grid gap-6 border bg-panel p-6 md:grid-cols-2 ${
                pkg.featured ? "border-ink" : "border-line"
              }`}
            >
              <div>
                {pkg.featured ? <p className="text-sm text-accent">Most owners pick this</p> : null}
                <h2 className="font-display text-3xl font-semibold">{pkg.name}</h2>
                <p className="mt-2 text-2xl font-semibold">
                  {pkg.price}
                  {pkg.period ?? ""}
                </p>
                <p className="text-sm text-mute">{pkg.timeline}</p>
                <p className="mt-4">{pkg.outcome}</p>
                <p className="mt-2 text-sm text-mute">{pkg.summary}</p>
                <a className="btn mt-6" href={`mailto:${site.email}?subject=${encodeURIComponent(pkg.name)}`}>
                  Ask about {pkg.name}
                </a>
              </div>
              <ul className="space-y-2 text-sm">
                {pkg.includes.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Why it costs that</h2>
          <p className="mt-3 max-w-2xl text-mute">
            Launch is a custom page, not a $900 template. Custom is the working site most businesses need.
            Studio is the decoy-and-step-up: more pages, tighter art direction, launch support. Care is so the asset does not rot.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Estimate a range</h2>
          <p className="mt-2 text-sm text-mute">Move the sliders. Then email or call — the number is not a contract.</p>
          <div className="mt-6">
            <PricingCalculator />
          </div>
        </section>

        <section className="mt-16 overflow-x-auto">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What you are comparing</h2>
          <p className="mt-2 text-sm text-mute">Types of jobs, not named companies.</p>
          <table className="mt-6 w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="py-3 pr-3"> </th>
                <th className="py-3 pr-3">DIY builder</th>
                <th className="py-3 pr-3">Theme job</th>
                <th className="py-3 pr-3">Big agency</th>
                <th className="py-3">Urban Gleams</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.item} className="border-b border-line align-top">
                  <td className="py-3 pr-3 font-semibold">{row.item}</td>
                  <td className="py-3 pr-3 text-mute">{row.diy}</td>
                  <td className="py-3 pr-3 text-mute">{row.template}</td>
                  <td className="py-3 pr-3 text-mute">{row.agency}</td>
                  <td className="py-3">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Rates, add-ons, bundles</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Object.values(rates).map((row) => (
              <div key={row.label} className="border border-line p-4">
                <p className="font-semibold">
                  {row.label} · {row.price}
                </p>
                <p className="mt-1 text-sm text-mute">{row.why}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {bundles.map((b) => (
              <div key={b.name} className="border border-ink p-4">
                <p className="font-semibold">
                  {b.name} · {b.price}
                </p>
                <p className="mt-1 text-sm text-mute">{b.note}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
            {addons.map((a) => (
              <li key={a.name}>
                <span className="font-semibold">{a.name}</span> {a.price} — {a.note}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">How a job runs</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {timeline.map((step) => (
              <li key={step.when} className="border border-line p-4">
                <p className="text-sm text-accent">{step.when}</p>
                <p className="mt-2 text-sm">{step.what}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">In the package</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {included.map((i) => (
                <li key={i}>— {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Not in the package</h2>
            <ul className="mt-3 space-y-1 text-sm text-mute">
              {notIncluded.map((i) => (
                <li key={i}>— {i}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Why people book here</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item.t}>
                <h3 className="font-display text-xl font-semibold">{item.t}</h3>
                <p className="mt-2 text-mute">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Services</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="border border-line p-4 hover:border-ink">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-mute">{s.outcome}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Straight answers</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {objections.map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-xl font-semibold">{item.q}</h3>
                <p className="mt-2 text-mute">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CtaBar />
    </>
  );
}
