"use client";

import { useMemo, useState } from "react";
import { RangeSlider } from "./RangeSlider";
import { SelectMenu } from "./SelectMenu";
import { Switch } from "./Switch";
import { site } from "@/lib/site";
import {
  bandFromPages,
  careOptions,
  estimateQuote,
  formatAud,
  HOURLY_AUD,
  packageFromPages,
  packageTypes,
  pageBands,
  quoteLines,
  type CarePlan,
  type PackageType,
} from "@/lib/pricing";

const pageTicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function PricingCalculator() {
  const [pages, setPages] = useState(6);
  const [pkg, setPkg] = useState<PackageType>("business");
  const [band, setBand] = useState("4-6");
  const [booking, setBooking] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [copywriting, setCopywriting] = useState(false);
  const [blog, setBlog] = useState(false);
  const [logo, setLogo] = useState(false);
  const [gbp, setGbp] = useState(false);
  const [speed, setSpeed] = useState(false);
  const [audit, setAudit] = useState(false);
  const [care, setCare] = useState<CarePlan>("none");

  const quote = useMemo(
    () =>
      estimateQuote({
        pages,
        pkg,
        booking,
        ecommerce,
        copywriting,
        blog,
        logo,
        gbp,
        speed,
        audit,
        care,
      }),
    [pages, pkg, booking, ecommerce, copywriting, blog, logo, gbp, speed, audit, care],
  );
  const lines = useMemo(
    () =>
      quoteLines({
        pages,
        pkg,
        booking,
        ecommerce,
        copywriting,
        blog,
        logo,
        gbp,
        speed,
        audit,
        care,
      }),
    [pages, pkg, booking, ecommerce, copywriting, blog, logo, gbp, speed, audit, care],
  );

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
          label="Package"
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
        <SelectMenu
          label="Care after launch"
          value={care}
          options={[...careOptions]}
          onChange={(value) => setCare(value as CarePlan)}
        />
        <div className="grid gap-2.5">
          <Switch
            label="Booking integration"
            hint="$150. Calendly, Cal.com, or the tool you already use."
            checked={booking}
            onChange={setBooking}
          />
          <Switch
            label="E-commerce"
            hint="From $600. A shop on top of the site."
            checked={ecommerce}
            onChange={setEcommerce}
          />
          <Switch
            label="Copywriting"
            hint="From $150. I draft the pages from the call notes."
            checked={copywriting}
            onChange={setCopywriting}
          />
          <Switch label="Blog setup" hint="$150." checked={blog} onChange={setBlog} />
          <Switch label="Logo refresh" hint="$120. Not a full rebrand." checked={logo} onChange={setLogo} />
          <Switch
            label="Google Business Profile"
            hint="$120. Set up or clean up."
            checked={gbp}
            onChange={setGbp}
          />
          <Switch label="Speed optimisation" hint="$150." checked={speed} onChange={setSpeed} />
          <Switch
            label="Website audit"
            hint="$99. Comes off a rebuild if we go ahead."
            checked={audit}
            onChange={setAudit}
          />
        </div>
      </div>
      <aside className="ug-calc-result" aria-live="polite">
        <p className="ug-kicker">Estimate only — not a contract</p>
        <p className="ug-calc-total">{formatAud(quote.mid)}</p>
        <p className="text-sm text-mute">
          From the published menu. Extra pages beyond the package are $50 each. Work outside a written
          scope is ${HOURLY_AUD}/hr.
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
          <p className="text-sm text-mute">Care is off — $19, $39, or $79 a month if you add it later.</p>
        )}
        <p className="text-sm text-mute">
          E-commerce is from $600 and sits on top of the site package. I’ll confirm the number on the call.
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
