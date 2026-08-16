/**
 * Quote estimator (AUD, excl. GST unless we agree otherwise).
 *
 * Base is a one-page custom build at LAUNCH_BASE.
 * Extra pages are PAGE_EACH (copy + layout, not a template clone).
 * Add-ons are fixed allowances so the range stays honest.
 * Low/high is ±12% so the number is clearly an estimate, not a contract.
 *
 * Hourly ($85) is NOT in this total — it only applies to work
 * outside a written scope after we agree the job.
 */

export const HOURLY_AUD = 85;
export const LAUNCH_BASE = 2400;
export const PAGE_EACH = 480;
export const BOOKING = 650;
export const ECOMMERCE = 2800;
export const COPYWRITING = 800;
export const SEO = 700;
export const PHOTO = 400;
export const CARE_MONTH = 189;

export type PackageType = "launch" | "custom" | "studio";

export type QuoteInput = {
  pages: number;
  booking: boolean;
  ecommerce: boolean;
  copywriting: boolean;
  seo: boolean;
  photography: boolean;
  care: boolean;
};

export const pageBands = [
  { value: "1", label: "1 page", hint: "Launch page", pages: 1 },
  { value: "2-3", label: "2–3 pages", hint: "Tight site", pages: 3 },
  { value: "4-6", label: "4–6 pages", hint: "Usual custom job", pages: 5 },
  { value: "7-9", label: "7–9 pages", hint: "Studio-sized", pages: 8 },
  { value: "10-12", label: "10–12 pages", hint: "Leaves the $2k–$6k band", pages: 11 },
] as const;

export const packageTypes = [
  { value: "launch", label: "Launch page", hint: "One page, one job", pages: 1 },
  { value: "custom", label: "Custom site", hint: "Four to six pages", pages: 5 },
  { value: "studio", label: "Studio build", hint: "Fuller site, tighter art direction", pages: 8 },
] as const;

export function bandFromPages(pages: number) {
  if (pages <= 1) return "1";
  if (pages <= 3) return "2-3";
  if (pages <= 6) return "4-6";
  if (pages <= 9) return "7-9";
  return "10-12";
}

export function packageFromPages(pages: number): PackageType {
  if (pages <= 1) return "launch";
  if (pages <= 6) return "custom";
  return "studio";
}

export function estimateQuote(input: QuoteInput) {
  const pages = Math.min(12, Math.max(1, Math.round(input.pages)));
  let mid = LAUNCH_BASE;
  if (pages > 1) mid += (pages - 1) * PAGE_EACH;
  if (input.booking) mid += BOOKING;
  if (input.ecommerce) mid += ECOMMERCE;
  if (input.copywriting) mid += COPYWRITING;
  if (input.seo) mid += SEO;
  if (input.photography) mid += PHOTO;

  const low = Math.round(mid * 0.88);
  const high = Math.round(mid * 1.12);
  const care = input.care ? CARE_MONTH : 0;

  return { pages, mid, low, high, care };
}

export function quoteLines(input: QuoteInput) {
  const pages = Math.min(12, Math.max(1, Math.round(input.pages)));
  const lines: { label: string; amount: number }[] = [{ label: "Custom base (one page)", amount: LAUNCH_BASE }];
  if (pages > 1) {
    lines.push({ label: `${pages - 1} extra page${pages - 1 === 1 ? "" : "s"}`, amount: (pages - 1) * PAGE_EACH });
  }
  if (input.booking) lines.push({ label: "Booking / tap-to-call", amount: BOOKING });
  if (input.ecommerce) lines.push({ label: "E-commerce", amount: ECOMMERCE });
  if (input.copywriting) lines.push({ label: "Copywriting", amount: COPYWRITING });
  if (input.seo) lines.push({ label: "Local SEO foundations", amount: SEO });
  if (input.photography) lines.push({ label: "Photography coordination", amount: PHOTO });
  return lines;
}

export function formatAud(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}
