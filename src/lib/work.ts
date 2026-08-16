export type WorkTheme = "cafe" | "salon" | "clinic" | "trade";

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
  note: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "batch-birch",
    name: "Batch & Birch",
    city: "Melbourne",
    industry: "Cafe",
    theme: "cafe",
    headline: "Hours, menu, and catering on one page you can actually read.",
    problem:
      "A lot of cafe sites are a logo, an Instagram link, and a photo of a chalkboard. Hours are wrong. The menu is a PDF. Catering is a guess.",
    built:
      "A sample cafe site: today’s hours, a typed menu, where to find us, and a catering form. Built to show how I’d treat a real hospitality job.",
    pages: ["Home", "Menu", "Find us", "Catering"],
    stack: ["Next.js", "Cloudflare"],
    note: "Sample only. Not a real client.",
  },
  {
    slug: "cut-room",
    name: "The Cut Room",
    city: "Sydney",
    industry: "Salon",
    theme: "salon",
    headline: "Services and a book button that stay on the screen.",
    problem:
      "Salon sites often hide the booking under a Facebook page or a widget that dies on mobile. Colour vs cut is a wall of text.",
    built:
      "A sample salon one-pager: cuts, colour, a short team note, and a book action that does not scroll away.",
    pages: ["Home", "Services", "Team", "Book"],
    stack: ["Next.js", "Cloudflare"],
    note: "Sample only. Not a real client.",
  },
  {
    slug: "river-physio",
    name: "River Physio",
    city: "Brisbane",
    industry: "Clinic",
    theme: "clinic",
    headline: "What you treat, who you see, how to get an appointment.",
    problem:
      "Clinic sites pile on stock smiles and a 12-item nav. People want: do you treat this, are you taking patients, and what’s the number.",
    built:
      "A sample clinic: treatments, first-visit notes, and call / request a time. Calm layout, no stock-photo wallpaper.",
    pages: ["Home", "Treatments", "First visit", "Contact"],
    stack: ["Next.js", "Cloudflare"],
    note: "Sample only. Not a real client.",
  },
  {
    slug: "kerr-electrical",
    name: "Kerr Electrical",
    city: "Adelaide",
    industry: "Trade",
    theme: "trade",
    headline: "Licence, suburbs, call or SMS. That’s the site.",
    problem:
      "Trades get stuck on directory ads and a Wix page with a form that goes nowhere. Homeowners can’t tell if you’re local or still trading.",
    built:
      "A sample trade site: licence up front, suburbs listed, emergency vs booked work, and tap-to-call on every page.",
    pages: ["Home", "Services", "Areas", "Contact"],
    stack: ["Next.js", "Cloudflare"],
    note: "Sample only. Not a real client.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
