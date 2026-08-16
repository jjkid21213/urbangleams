/** Full commercial menu. AUD. GST discussed on the invoice. */
export const rates = {
  hourly: { label: "Hourly (outside scope)", price: "$85/hr", why: "Extra pages or features after we signed off." },
  day: { label: "Day rate", price: "$640", why: "A focused day. Cheaper than 8 × $85." },
  priority: { label: "Priority / after-hours", price: "$140/hr", why: "Same-day or weekend work. You pay for the jump." },
  care: { label: "Care retainer", price: "$189/mo", why: "Hosting help + one small change. Site does not rot." },
  carePlus: { label: "Care + priority", price: "$279/mo", why: "Care, plus same-day weekday replies." },
  multiSite: { label: "Second site", price: "12% off", why: "Same brand system, less setup." },
  returning: { label: "Returning client", price: "8% off", why: "We already know the business." },
  referral: { label: "Referral credit", price: "$200", why: "When a referred job is paid, you get credit." },
  plan: { label: "Payment plan", price: "50 / 50", why: "Half to start, half at launch. Studio can split to 3 months." },
};

export const bundles = [
  {
    name: "Custom + 3 months Care",
    price: "$4,350",
    note: "The $3,900 site plus Care at a small bundle cut. Hours stay current after launch.",
  },
  {
    name: "Studio + local SEO",
    price: "$6,600",
    note: "Studio build plus suburb/service pages and Search Console. For owners who live on Google.",
  },
];
