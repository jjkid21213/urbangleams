export type WorkTheme = "salon" | "cafe" | "trade";

export type CaseStudy = {
  slug: string;
  name: string;
  city: string;
  industry: string;
  theme: WorkTheme;
  headline: string;
  problem: string;
  built: string;
  pages: string[];
  stack: string[];
  targets: string[];
  note: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "vellum-salon",
    name: "Vellum",
    city: "Melbourne",
    industry: "Hair salon",
    theme: "salon",
    headline: "A Fitzroy salon that looked like 2014 online.",
    problem:
      "Walk-ins were fine on Saturday. Tuesday was quiet. The old site was a Facebook page, a faded logo, and a phone number buried under reviews. Nobody could book colour from their phone on the tram.",
    built:
      "A quiet, high-contrast one-pager: services, a short story, and a book button that never leaves the screen. Built as a spec project to show how a salon site should ask for the appointment.",
    pages: ["Home", "Services strip", "Team", "Book"],
    stack: ["Next.js", "Tailwind", "Cal.com embed"],
    targets: [
      "Book button visible on first screen",
      "Under 2s load on mobile",
      "Colour and cut packages readable in 10 seconds",
    ],
    note: "Spec project. Built to drive bookings — not a claim of past revenue.",
  },
  {
    slug: "harbour-batch",
    name: "Harbour Batch",
    city: "Brisbane",
    industry: "Cafe",
    theme: "cafe",
    headline: "A riverside cafe with a menu PDF and no hours.",
    problem:
      "Tourists Googled the name and bounced. Hours were wrong. The menu was a photograph of a chalkboard. The cafe was full of regulars who already knew — and invisible to everyone else.",
    built:
      "A warm, paper-textured site: hours, location, a readable menu, and a catering enquiry. Spec work for hospitality operators who need the phone to ring for functions, not just Instagram likes.",
    pages: ["Home", "Menu", "Hours & find us", "Catering"],
    stack: ["Next.js", "Tailwind", "Structured data for hours"],
    targets: [
      "Hours and map in one glance",
      "Menu without pinch-zoom",
      "Catering form for weekday functions",
    ],
    note: "Spec project. Built to drive enquiries — not a claim of past revenue.",
  },
  {
    slug: "northline-electrical",
    name: "Northline Electrical",
    city: "Sydney",
    industry: "Trade",
    theme: "trade",
    headline: "A licensed sparkie competing with directory spam.",
    problem:
      "The business lived on Hipages ads. The ‘website’ was a Wix template with stock hard-hats and a form that went nowhere. Homeowners in the inner west could not tell if they were insured, local, or still trading.",
    built:
      "A straight site: licence, suburbs, emergency vs planned, and a call/SMS pair on every page. Spec work for trades who want jobs from search, not another lead mill.",
    pages: ["Home", "Services", "Areas", "Contact"],
    stack: ["Next.js", "Tailwind", "Click-to-call"],
    targets: [
      "Call and SMS on mobile header",
      "Licence and insurance on the first screen",
      "Suburb list for local search",
    ],
    note: "Spec project. Built to drive jobs — not a claim of past revenue.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
