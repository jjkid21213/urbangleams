export type PackageId = "starter" | "business" | "growth";

export const packages: {
  id: PackageId;
  name: string;
  price: string;
  period?: string;
  timeline: string;
  summary: string;
  outcome: string;
  includes: string[];
  featured?: boolean;
}[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "$299",
    timeline: "3–5 business days",
    summary: "For sole traders who need a real site, not a social-link page.",
    outcome: "Up to three pages, mobile, a contact form, and a way for people to find you.",
    includes: [
      "Up to 3 pages",
      "Mobile layout",
      "Contact form",
      "Maps and social links",
      "Basic SEO titles",
      "SSL and a fast load",
      "1 revision round",
      "Launch support",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    price: "$499",
    timeline: "5–7 business days",
    featured: true,
    summary: "The usual job for cafes, salons, clinics, trades, and restaurants.",
    outcome: "Up to six pages that can take enquiries, show the work, and sit properly on a phone.",
    includes: [
      "Up to 6 pages",
      "Mobile-first layout",
      "Forms",
      "Gallery, services, and FAQ",
      "Maps",
      "Basic local SEO",
      "Speed work and analytics",
      "2 revision rounds",
      "Launch support",
    ],
  },
  {
    id: "growth",
    name: "Growth Website",
    price: "From $799",
    timeline: "1–2 weeks",
    summary: "More pages and tighter layout when the site has to do more than one job.",
    outcome: "Up to twelve pages, custom layouts, blog, and booking tools — still a written scope.",
    includes: [
      "Up to 12 pages",
      "Custom layouts",
      "Blog",
      "Advanced forms",
      "Booking integrations",
      "Image optimisation",
      "Local SEO foundations",
      "Performance work",
      "Priority support",
      "3 revision rounds",
    ],
  },
];

export const carePlans = [
  {
    id: "basic",
    name: "Basic Care",
    price: "$19/mo",
    note: "Security, plugin updates, monthly backup.",
  },
  {
    id: "business",
    name: "Business Care",
    price: "$39/mo",
    note: "Everything in Basic, plus 30 minutes of edits, priority email, and performance checks.",
  },
  {
    id: "premium",
    name: "Premium Care",
    price: "$79/mo",
    note: "Everything in Business, plus 2 hours of edits, priority turnaround, and monthly optimisation.",
  },
];

export const addons = [
  { name: "Extra page", price: "$50", note: "Another page inside the same look." },
  { name: "Blog setup", price: "$150", note: "A simple posts section you can add to later." },
  { name: "Booking integration", price: "$150", note: "Calendly, Cal.com, or the tool you already pay for." },
  { name: "E-commerce", price: "From $600", note: "A shop on top of the site. Scope written before we start." },
  { name: "Logo refresh", price: "$120", note: "Tighten what you have. Not a full rebrand." },
  { name: "Copywriting", price: "From $150", note: "I draft the pages from the call notes." },
  { name: "Google Business Profile", price: "$120", note: "Set up or clean up so search matches the site." },
  { name: "Speed optimisation", price: "$150", note: "Images, fonts, and junk scripts so phones don’t wait." },
  { name: "Website audit", price: "$99", note: "A written note on what is stopping calls. Comes off a rebuild if we go ahead." },
];
