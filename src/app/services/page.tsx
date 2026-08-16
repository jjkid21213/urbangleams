import type { Metadata } from "next";
import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Services",
  description: "Gleam Launch, Gleam Conversion, and Gleam Care — websites for urban local businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-gleam">Services</p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl italic md:text-6xl">
          Three offers. Pick the one that matches the mess.
        </h1>
        <p className="mt-5 max-w-xl text-mute">
          For cafes, salons, clinics, and trades. Prices in AUD. Invoice after the call — Stripe, PayPal, or bank.
        </p>

        <div className="mt-16 grid gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`grid gap-8 border p-8 md:grid-cols-2 ${
                pkg.featured ? "border-gleam/50" : "border-line"
              }`}
            >
              <div>
                <h2 className="font-serif text-4xl">{pkg.name}</h2>
                <p className="mt-3 font-serif text-3xl text-gleam">
                  {pkg.price}
                  {pkg.period ?? ""}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">{pkg.timeline}</p>
                <p className="mt-4 text-mute">{pkg.summary}</p>
                <Link href="/contact" className="btn-gleam mt-8">
                  Start with a call
                </Link>
              </div>
              <ul className="space-y-3 text-paper">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gleam">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="font-serif text-3xl italic">Who it is for</h2>
          <p className="mt-4 max-w-2xl text-mute">
            Owners who already have customers in the room and a site that does not help. Not a fit if you need an app, a marketplace, or a 40-page brochure with no offer.
          </p>
        </section>
      </div>
      <CtaBar />
    </>
  );
}
