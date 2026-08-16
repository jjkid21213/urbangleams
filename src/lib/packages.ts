export type PackageId = "launch" | "conversion" | "care";

export const packages: {
  id: PackageId;
  name: string;
  price: string;
  period?: string;
  timeline: string;
  summary: string;
  includes: string[];
  featured?: boolean;
}[] = [
  {
    id: "launch",
    name: "Gleam Launch",
    price: "$2,400",
    timeline: "2 weeks",
    summary: "A one-page site that looks expensive and ends in a booking or enquiry.",
    includes: [
      "One custom page, designed for your brand",
      "Contact or booking button above the fold",
      "Mobile-first, fast load",
      "Basic SEO titles and Google Business link",
      "Handover so you can change copy",
    ],
  },
  {
    id: "conversion",
    name: "Gleam Conversion",
    price: "$5,800",
    timeline: "3–4 weeks",
    featured: true,
    summary: "A 4–6 page rebuild. Clear offer, real copy, pages that ask for the job.",
    includes: [
      "Home, services, about, work or menu, contact",
      "Copy written with you, not lorem ipsum",
      "SEO foundations: titles, headings, sitemap",
      "Enquiry form that actually arrives",
      "Two rounds of revisions",
    ],
  },
  {
    id: "care",
    name: "Gleam Care",
    price: "$290",
    period: "/ month",
    timeline: "Ongoing",
    summary: "Small changes, hosting help, and a site that does not rot after launch.",
    includes: [
      "Hosting guidance and domain help",
      "Copy and image updates",
      "Security and dependency patches",
      "One small feature per month",
      "Same-week replies on weekdays",
    ],
  },
];
