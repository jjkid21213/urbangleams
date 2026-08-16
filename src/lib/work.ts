export type CaseStudy = {
  slug: string;
  href: string;
  name: string;
  city: string;
  industry: string;
  headline: string;
  problem: string;
  built: string;
  pages: string[];
  note: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "harbour-batch",
    href: "/samples/harbour-batch",
    name: "Harbour Batch",
    city: "Brisbane",
    industry: "Cafe",
    headline: "A riverside cafe site you can actually walk through.",
    problem:
      "Cafe sites often dump you on Instagram. Hours are wrong. The menu is a photo of a board.",
    built:
      "A full sample cafe: home, menu, visit, catering. Warm type, readable food, a table request.",
    pages: ["Home", "Menu", "Visit", "Catering"],
    note: "Showcase concept. Not a real cafe.",
  },
  {
    slug: "clearhold",
    href: "/samples/clearhold",
    name: "Clearhold",
    city: "Sydney",
    industry: "Treasury software",
    headline: "A fintech product site that talks like an adult.",
    problem:
      "A lot of crypto pages look like a nightclub flyer. Serious operators bounce.",
    built:
      "A sample treasury product: what it does, how settlement works, security posture, a real contact path.",
    pages: ["Home", "Product", "Security", "Contact"],
    note: "Showcase concept. Not a real company or financial product.",
  },
  {
    slug: "atelier-sloane",
    href: "/samples/atelier-sloane",
    name: "Atelier Sloane",
    city: "Melbourne",
    industry: "Womenswear",
    headline: "A boutique that feels like a shop, not a theme.",
    problem:
      "Fashion templates all look the same: grey sans, fake sale countdown, stock models.",
    built:
      "A sample atelier: collections, the making, the studio visit. Quiet layout, slow scroll.",
    pages: ["Home", "Collections", "Making", "Visit"],
    note: "Showcase concept. Not a real label.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
