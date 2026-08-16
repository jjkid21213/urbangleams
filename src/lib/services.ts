export type ServiceSlug =
  | "web-design"
  | "website-redesign"
  | "local-seo"
  | "maintenance"
  | "speed"
  | "booking"
  | "audits"
  | "landing-pages";

export const services: {
  slug: ServiceSlug;
  title: string;
  h1: string;
  description: string;
  outcome: string;
  points: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}[] = [
  {
    slug: "web-design",
    title: "Custom web design",
    h1: "Websites for local businesses",
    description: "Websites for cafes, salons, clinics, and trades in Australia. Built to get calls and bookings.",
    outcome: "A site that looks like your business and asks for the job.",
    points: [
      "Layout written around your offer, not a theme",
      "Call and book on a phone without pinch-zoom",
      "Copy that says what you do in ten seconds",
      "Forms that land in your inbox",
    ],
    process: ["Call — what you sell and who walks in", "Pages you can click, not a moodboard", "Live on your domain"],
    faqs: [
      { q: "Is this a template?", a: "No. Layout and type for your offer. Templates are cheaper and look like it." },
      { q: "How long?", a: "Starter in 3–5 business days. Business in 5–7. Growth in one to two weeks." },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website redesign",
    h1: "Redesign a site that is not getting calls",
    description: "Rebuild an existing website so people can book, call, and trust you.",
    outcome: "Keep the domain. Change what happens when someone lands.",
    points: [
      "We keep what already ranks if it is worth keeping",
      "New structure around the enquiry",
      "Redirects so old links do not die",
      "You see the new site before it replaces the old one",
    ],
    process: ["Look at the current site together", "Rewrite the offer and the pages", "Swap over on a quiet day"],
    faqs: [
      { q: "Do I lose Google?", a: "Not if we map the old URLs. I will not blow up a ranking page for a pretty home." },
      { q: "Can you work on WordPress / Wix?", a: "I rebuild on a modern stack and move the domain. You own it." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    h1: "Local SEO so the right suburb can find you",
    description: "Titles, suburb pages, Google Business, and a site that can actually rank.",
    outcome: "Search matches the business. The site can take the lead when they click.",
    points: [
      "Page titles and headings that match how people search",
      "Google Business Profile cleaned up",
      "Service + area pages when they are honest",
      "Search Console set up",
    ],
    process: ["What you want to be found for", "Fix the site and the profile", "A short note on what moved"],
    faqs: [
      { q: "Do you guarantee page one?", a: "No. Anyone who does is selling you a story. I do the work that can rank." },
      { q: "Is this ads?", a: "No. Organic and your profile. Ads are a different job." },
    ],
  },
  {
    slug: "maintenance",
    title: "Website maintenance",
    h1: "Keep the site current after launch",
    description: "Monthly care for security, backups, and small edits.",
    outcome: "The menu changes on Tuesday. The site can change with it.",
    points: [
      "Basic Care $19/mo — security, updates, backup",
      "Business Care $39/mo — plus 30 minutes of edits",
      "Premium Care $79/mo — plus 2 hours and faster turnaround",
      "Month to month",
    ],
    process: ["You send the change", "I do it in the week", "You check it live"],
    faqs: [
      { q: "What if I need more than the plan?", a: "We use $60/hr, or we quote a small job." },
      { q: "Can I cancel?", a: "Month to month. No lock-in story." },
    ],
  },
  {
    slug: "speed",
    title: "Website speed",
    h1: "Make the site fast on a phone",
    description: "Speed work so pages load before people bounce. $150 as an add-on.",
    outcome: "Less waiting. More people stay long enough to call.",
    points: [
      "Images and fonts that are not a brick",
      "Cut the junk scripts",
      "Check on a mid-range Android, not just a studio Mac",
      "Honest before/after on the pages that matter",
    ],
    process: ["Measure the live site", "Fix the heavy bits", "Measure again"],
    faqs: [
      { q: "Is this a redesign?", a: "Not always. Sometimes the look stays and the weight goes." },
      { q: "Do you promise a 100 score?", a: "No. I promise it is usable on a phone in the real world." },
    ],
  },
  {
    slug: "booking",
    title: "Booking websites",
    h1: "A site that can take the booking",
    description: "Call, SMS, or a booking tool on the first screen — not buried in a footer. Integration $150.",
    outcome: "Tuesday afternoons get filled without you chasing Instagram.",
    points: [
      "The action is obvious on a phone",
      "Cal.com, a form, or tap-to-call — whatever you will actually use",
      "Hours and services next to the button",
      "No fake widget that emails nobody",
    ],
    process: ["How people book you today", "Put that on the first screen", "Test it on your phone"],
    faqs: [
      { q: "Do I need a booking app?", a: "Only if you will check it. A tap-to-call beats a dead calendar." },
      { q: "Can you connect Square / Calendly?", a: "Yes, if you already pay for it." },
    ],
  },
  {
    slug: "audits",
    title: "Website audit",
    h1: "A straight audit of the current site",
    description: "What is stopping calls: offer, mobile, speed, forms, search. Written, not a 40-page deck.",
    outcome: "You know what to fix, and what to leave.",
    points: [
      "A short written note, not a slide show",
      "What to do this week vs later",
      "If I am the wrong person, I say so",
      "Fee can come off a rebuild if we go ahead",
    ],
    process: ["You send the URL", "I go through it like a customer", "We talk through the note"],
    faqs: [
      { q: "What does an audit cost?", a: "$99. If we then do the rebuild, I take it off the package." },
      { q: "Will you roast my site?", a: "I’ll be plain. Not rude for sport." },
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing pages",
    h1: "Landing pages that ask for one thing",
    description: "Campaign and QR pages with one offer and one action. Starter Website is $299.",
    outcome: "Ad spend does not dump people on a confused home page.",
    points: [
      "One offer, one button",
      "Matches the ad or the flyer",
      "Fast on mobile data",
      "You can run more than one page later",
    ],
    process: ["What the ad promises", "Build the page to that promise", "You tap it before it goes live"],
    faqs: [
      { q: "Is this the Starter package?", a: "Often, yes — $299 for up to three pages. Extra pages are $50." },
      { q: "Can I A/B test?", a: "We can run two versions. That is extra time at $60/hr or a small quote." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
