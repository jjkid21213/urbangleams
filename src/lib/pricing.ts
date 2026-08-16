export const HOURLY_AUD = 60;
export const STARTER_BASE = 299;
export const BUSINESS_BASE = 499;
export const GROWTH_BASE = 799;
export const PAGE_EACH = 50;
export const BOOKING = 150;
export const ECOMMERCE = 600;
export const COPYWRITING = 150;
export const BLOG = 150;
export const LOGO = 120;
export const GBP = 120;
export const SPEED = 150;
export const AUDIT = 99;

export type PackageType = "starter" | "business" | "growth";
export type CarePlan = "none" | "basic" | "business" | "premium";

export type QuoteInput = {
  pages: number;
  pkg: PackageType;
  booking: boolean;
  ecommerce: boolean;
  copywriting: boolean;
  blog: boolean;
  logo: boolean;
  gbp: boolean;
  speed: boolean;
  audit: boolean;
  care: CarePlan;
};

export const pageBands = [
  { value: "1-3", label: "1–3 pages", hint: "Starter", pages: 3 },
  { value: "4-6", label: "4–6 pages", hint: "Business", pages: 6 },
  { value: "7-12", label: "7–12 pages", hint: "Growth", pages: 10 },
] as const;

export const packageTypes = [
  { value: "starter", label: "Starter Website", hint: "$299 · up to 3 pages", pages: 3, included: 3, base: STARTER_BASE },
  { value: "business", label: "Business Website", hint: "$499 · up to 6 pages", pages: 6, included: 6, base: BUSINESS_BASE },
  { value: "growth", label: "Growth Website", hint: "From $799 · up to 12 pages", pages: 10, included: 12, base: GROWTH_BASE },
] as const;

export const careOptions = [
  { value: "none", label: "No care plan", hint: "You can add this later", amount: 0 },
  { value: "basic", label: "Basic Care", hint: "$19/mo · security, updates, backup", amount: 19 },
  { value: "business", label: "Business Care", hint: "$39/mo · 30 min edits", amount: 39 },
  { value: "premium", label: "Premium Care", hint: "$79/mo · 2 hours edits", amount: 79 },
] as const;

export function bandFromPages(pages: number) {
  if (pages <= 3) return "1-3";
  if (pages <= 6) return "4-6";
  return "7-12";
}

export function packageFromPages(pages: number): PackageType {
  if (pages <= 3) return "starter";
  if (pages <= 6) return "business";
  return "growth";
}

export function includedPages(pkg: PackageType) {
  if (pkg === "starter") return 3;
  if (pkg === "business") return 6;
  return 12;
}

export function packageBase(pkg: PackageType) {
  if (pkg === "starter") return STARTER_BASE;
  if (pkg === "business") return BUSINESS_BASE;
  return GROWTH_BASE;
}

export function estimateQuote(input: QuoteInput) {
  const pages = Math.min(12, Math.max(1, Math.round(input.pages)));
  const included = includedPages(input.pkg);
  const extraPages = Math.max(0, pages - included);
  let mid = packageBase(input.pkg) + extraPages * PAGE_EACH;
  if (input.booking) mid += BOOKING;
  if (input.ecommerce) mid += ECOMMERCE;
  if (input.copywriting) mid += COPYWRITING;
  if (input.blog) mid += BLOG;
  if (input.logo) mid += LOGO;
  if (input.gbp) mid += GBP;
  if (input.speed) mid += SPEED;
  if (input.audit) mid += AUDIT;
  const care = careOptions.find((item) => item.value === input.care)?.amount ?? 0;
  return { pages, extraPages, mid, care };
}

export function quoteLines(input: QuoteInput) {
  const pages = Math.min(12, Math.max(1, Math.round(input.pages)));
  const extraPages = Math.max(0, pages - includedPages(input.pkg));
  const pkgLabel = packageTypes.find((item) => item.value === input.pkg)?.label ?? "Package";
  const lines: { label: string; amount: number }[] = [{ label: pkgLabel, amount: packageBase(input.pkg) }];
  if (extraPages > 0) {
    lines.push({
      label: `${extraPages} extra page${extraPages === 1 ? "" : "s"}`,
      amount: extraPages * PAGE_EACH,
    });
  }
  if (input.booking) lines.push({ label: "Booking integration", amount: BOOKING });
  if (input.ecommerce) lines.push({ label: "E-commerce", amount: ECOMMERCE });
  if (input.copywriting) lines.push({ label: "Copywriting", amount: COPYWRITING });
  if (input.blog) lines.push({ label: "Blog setup", amount: BLOG });
  if (input.logo) lines.push({ label: "Logo refresh", amount: LOGO });
  if (input.gbp) lines.push({ label: "Google Business Profile", amount: GBP });
  if (input.speed) lines.push({ label: "Speed optimisation", amount: SPEED });
  if (input.audit) lines.push({ label: "Website audit", amount: AUDIT });
  return lines;
}

export function formatAud(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}
