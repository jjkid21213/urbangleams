export type PackageId = "launch" | "custom" | "studio" | "care";

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
    id: "launch",
    name: "Launch page",
    price: "$2,400",
    timeline: "About 2 weeks",
    summary: "One custom page that does one job: get the enquiry.",
    outcome:
      "A landing page you can run ads or a QR to. One tap to call or book. This is not a $900 template.",
    includes: [
      "Custom layout and type — not a theme",
      "Call / book on the first screen",
      "Copy drafted from a call",
      "Mobile-first, fast load, basic SEO titles",
      "Two revision rounds inside this scope",
    ],
  },
  {
    id: "custom",
    name: "Custom site",
    price: "$3,900",
    timeline: "3–4 weeks",
    featured: true,
    summary: "Four to six pages. The usual job for a cafe, salon, clinic, or trade.",
    outcome:
      "A site that can take bookings and enquiries without you living in DMs. Most owners land here.",
    includes: [
      "Home, services, about, contact — plus menu, areas, or work if needed",
      "Copy drafted with you",
      "Enquiry form that emails you",
      "SEO titles, headings, sitemap",
      "Two revision rounds inside this scope",
    ],
  },
  {
    id: "studio",
    name: "Studio build",
    price: "$5,900",
    timeline: "5–6 weeks",
    summary: "A fuller custom site when the brand has to hold up in a serious room.",
    outcome:
      "For owners who send the URL to a landlord, a supplier, or a high-value client and expect it to hold.",
    includes: [
      "Everything in Custom, plus extra pages",
      "Tighter art direction",
      "Photo direction and more involved copy",
      "Launch: domain, SSL, Search Console",
      "Two weeks of tweaks after go-live",
    ],
  },
  {
    id: "care",
    name: "Care",
    price: "$189",
    period: "/ month",
    timeline: "Month to month",
    summary: "The site stays current. Hours, prices, and small changes.",
    outcome: "You are not waiting on a cousin who ‘does websites’ when the menu changes.",
    includes: [
      "Hosting and domain help",
      "Copy and photo updates",
      "One small change a month",
      "Weekday replies",
    ],
  },
];

export const addons = [
  { name: "Logo refinement", price: "$450", note: "Tighten what you have. Not a full rebrand." },
  { name: "Copywriting pack", price: "$800", note: "I write the pages from the call notes." },
  { name: "Photography coordination", price: "$400", note: "Shot list and brief. Photographer billed separately." },
  { name: "Google Business Profile", price: "$250", note: "Set up or clean up so search matches the site." },
  { name: "Blog setup", price: "$550", note: "A simple posts section you can add to later." },
  { name: "Advanced local SEO", price: "$900", note: "Service + suburb pages, schema, Search Console." },
  { name: "Analytics dashboard", price: "$350", note: "GA4 + a one-page view of calls and form starts." },
  { name: "Monthly reporting", price: "$120/mo", note: "A short note on traffic and enquiries." },
  { name: "Priority support", price: "$90/mo", note: "Same-day weekday replies on Care." },
];
