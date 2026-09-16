export const site = {
  name: "Drumreel",
  domain: "https://drumreel.com",
  app: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.drumreel.com",
  email: "hello@drumreel.com",
  support: "drumreel@mubashirjamali.com",
  tagline: "Describe the walkthrough. Get the MP4.",
  description:
    "Point Drumreel at a public HTTPS staging URL. Write what a customer should see. We drive the product, record a clean MP4, and drop it in your library. 50 credits after you verify email.",
};

export const signupUrl = `${site.app.replace(/\/$/, "")}/signup`;
export const loginUrl = `${site.app.replace(/\/$/, "")}/login`;
export const pricingUrl = `${site.app.replace(/\/$/, "")}/#pricing`;

export const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "to start",
    credits: "50 credits after email verify",
    blurb: "One short walkthrough on us. No card to try.",
    cta: "Start free",
    href: signupUrl,
    featured: false,
  },
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    period: "/ month",
    credits: "500 credits / month",
    blurb: "Weekly demos for a product team.",
    cta: "Choose Starter",
    href: signupUrl,
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49",
    period: "/ month",
    credits: "2,000 credits / month",
    blurb: "Sales and CS recording at volume.",
    cta: "Choose Pro",
    href: signupUrl,
    featured: true,
  },
  {
    id: "studio",
    name: "Studio",
    price: "$149",
    period: "/ month",
    credits: "8,000 credits / month",
    blurb: "Agencies and in-house media teams.",
    cta: "Contact sales",
    href: `mailto:${site.email}?subject=Drumreel%20Studio`,
    featured: false,
  },
] as const;

export const packs = [
  { name: "500 credits", price: "$10" },
  { name: "1,500 credits", price: "$25" },
  { name: "3,500 credits", price: "$50" },
  { name: "8,000 credits", price: "$100" },
] as const;
