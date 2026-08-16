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

export type QuoteInput = {
  pages: number;
  booking: boolean;
  ecommerce: boolean;
  copywriting: boolean;
  seo: boolean;
  photography: boolean;
  care: boolean;
};

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

export function formatAud(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}
