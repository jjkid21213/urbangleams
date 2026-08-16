"use client";

import { useMemo, useState } from "react";
import { RangeSlider } from "./RangeSlider";
import { SelectMenu } from "./SelectMenu";
import { Switch } from "./Switch";
import { site } from "@/lib/site";
import {
  bandFromPages,
  estimateQuote,
  formatAud,
  HOURLY_AUD,
  packageFromPages,
  packageTypes,
  pageBands,
  quoteLines,
  type PackageType,
} from "@/lib/pricing";

const pageTicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function PricingCalculator() {
  const [pages, setPages] = useState(5);
  const [pkg, setPkg] = useState<PackageType>("custom");
  const [band, setBand] = useState("4-6");
  const [booking, setBooking] = useState(true);
  const [ecommerce, setEcommerce] = useState(false);
  const [copywriting, setCopywriting] = useState(true);
  const [seo, setSeo] = useState(true);
  const [photography, setPhotography] = useState(false);
  const [care, setCare] = useState(true);

  const input = { pages, booking, ecommerce, copywriting, seo, photography, care };
  const quote = useMemo(() => estimateQuote(input), [pages, booking, ecommerce, copywriting, seo, photography, care]);
  const lines = useMemo(() => quoteLines(input), [pages, booking, ecommerce, copywriting, seo, photography, care]);

  function setPageCount(next: number) {
    const clamped = Math.min(12, Math.max(1, Math.round(next)));
    setPages(clamped);
    setBand(bandFromPages(clamped));
    setPkg(packageFromPages(clamped));
  }

  return (
    <div className="ug-calc">
      <div className="ug-calc-controls">
        <SelectMenu
          label="Package type"
          value={pkg}
          options={[...packageTypes]}
          onChange={(value) => {
            const next = packageTypes.find((item) => item.value === value);
            if (!next) return;
            setPkg(next.value);
            setPageCount(next.pages);
          }}
        />
        <SelectMenu
          label="Page band"
          value={band}
          options={[...pageBands]}
          onChange={(value) => {
            const next = pageBands.find((item) => item.value === value);
            if (!next) return;
            setBand(next.value);
            setPageCount(next.pages);
          }}
        />
        <RangeSlider
          id="pages"
          label="Pages"
          min={1}
          max={12}
          value={pages}
          ticks={pageTicks}
          valueLabel={`${pages} page${pages === 1 ? "" : "s"}`}
          onChange={setPageCount}
        />
        <div className="grid gap-2.5">
          <Switch
            label="Booking / tap-to-call setup"
            hint="The action sits on the first screen."
            checked={booking}
            onChange={setBooking}
          />
          <Switch
            label="E-commerce"
            hint="Takes you out of the usual $2k–$6k custom band."
            checked={ecommerce}
            onChange={setEcommerce}
          />
          <Switch
            label="Copywriting"
            hint="I draft the pages from the call notes."
            checked={copywriting}
            onChange={setCopywriting}
          />
          <Switch
            label="Local SEO foundations"
            hint="Titles, headings, sitemap — not a ranking promise."
            checked={seo}
            onChange={setSeo}
          />
          <Switch
            label="Photography coordination"
            hint="Shot list and brief. Photographer billed separately."
            checked={photography}
            onChange={setPhotography}
          />
          <Switch
            label="Care after launch"
            hint={`${formatAud(quote.care || 189)} / month. Optional. Hosting help plus one small change.`}
            checked={care}
            onChange={setCare}
          />
        </div>
      </div>
      <aside className="ug-calc-result" aria-live="polite">
        <p className="ug-kicker">Estimate only — not a contract</p>
        <p className="ug-calc-total">
          {formatAud(quote.low)}–{formatAud(quote.high)}
        </p>
        <p className="text-sm text-mute">
          Midpoint {formatAud(quote.mid)}. Work outside a written scope is ${HOURLY_AUD}/hr.
        </p>
        <div className="ug-calc-lines">
          {lines.map((line) => (
            <div className="ug-calc-line" key={line.label}>
              <span>{line.label}</span>
              <span>{formatAud(line.amount)}</span>
            </div>
          ))}
        </div>
        {quote.care ? (
          <p className="text-sm">Plus Care {formatAud(quote.care)} / month if you want it.</p>
        ) : (
          <p className="text-sm text-mute">Care is off — you can add it later, month to month.</p>
        )}
        <p className="text-sm text-mute">
          E-commerce and extra pages move you out of the usual $2k–$6k custom band. I’ll say so on
          the call.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${site.email}?subject=Website estimate`}>
            Email this through
          </a>
          <a className="btn-line" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </aside>
    </div>
  );
}
