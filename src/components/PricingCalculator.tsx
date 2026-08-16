"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { estimateQuote, formatAud, HOURLY_AUD } from "@/lib/pricing";

export function PricingCalculator() {
  const [pages, setPages] = useState(5);
  const [booking, setBooking] = useState(true);
  const [ecommerce, setEcommerce] = useState(false);
  const [copywriting, setCopywriting] = useState(true);
  const [seo, setSeo] = useState(true);
  const [photography, setPhotography] = useState(false);
  const [care, setCare] = useState(true);

  const quote = useMemo(
    () =>
      estimateQuote({
        pages,
        booking,
        ecommerce,
        copywriting,
        seo,
        photography,
        care,
      }),
    [pages, booking, ecommerce, copywriting, seo, photography, care],
  );

  return (
    <div className="grid gap-8 border border-ink bg-panel p-6 md:grid-cols-2 md:p-8">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm">
          <span className="flex justify-between">
            <span>Pages</span>
            <span className="font-semibold">{pages}</span>
          </span>
          <input
            type="range"
            min={1}
            max={12}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
          />
        </label>
        {[
          ["Booking / tap-to-call setup", booking, setBooking],
          ["E-commerce", ecommerce, setEcommerce],
          ["Copywriting", copywriting, setCopywriting],
          ["Local SEO foundations", seo, setSeo],
          ["Photography coordination", photography, setPhotography],
          ["Care after launch", care, setCare],
        ].map(([label, on, set]) => (
          <label key={String(label)} className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={on as boolean}
              onChange={(e) => (set as (v: boolean) => void)(e.target.checked)}
            />
            {label as string}
          </label>
        ))}
      </div>
      <div>
        <p className="text-sm text-mute">Estimate only — not a quote</p>
        <p className="mt-2 font-display text-4xl font-semibold">
          {formatAud(quote.low)}–{formatAud(quote.high)}
        </p>
        <p className="mt-2 text-sm text-mute">
          Midpoint {formatAud(quote.mid)}. Work outside a written scope is {HOURLY_AUD}/hr.
        </p>
        {quote.care ? (
          <p className="mt-2 text-sm">Plus Care {formatAud(quote.care)} / month if you want it.</p>
        ) : null}
        <p className="mt-4 text-sm text-mute">
          E-commerce and extra pages move you out of the usual $2k–$6k custom band. I’ll say so on the call.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${site.email}?subject=Website estimate`}>
            Email this through
          </a>
          <a className="btn-line" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
