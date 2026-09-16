export const site = {
  name: "Drumreel",
  domain: "https://drumreel.com",
  app: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.drumreel.com",
  email: "hello@drumreel.com",
  support: "drumreel@mubashirjamali.com",
  tagline: "Replace 95% of your Looms.",
  description:
    "Drumreel logs into your public staging URL, rehearses the flow, records Chromium, then masters ElevenLabs narration and a talking avatar onto the MP4. Re-film a saved script without burning another AI planner run.",
};

export const signupUrl = `${site.app.replace(/\/$/, "")}/signup`;
export const loginUrl = `${site.app.replace(/\/$/, "")}/login`;

export const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "to start",
    credits: "50 credits after email verify",
    blurb: "One real walkthrough on us. No card.",
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

export const hosts = [
  { id: "sarah", name: "Sarah", role: "Product host", file: "/avatars/sarah.jpg" },
  { id: "alex", name: "Alex", role: "Dev advocate", file: "/avatars/alex.jpg" },
  { id: "marcus", name: "Marcus", role: "Enterprise", file: "/avatars/marcus.jpg" },
  { id: "elena", name: "Elena", role: "Launch story", file: "/avatars/elena.jpg" },
] as const;

export const voices = [
  { id: "rachel", name: "Rachel", tone: "Calm · American", engine: "Eleven Multilingual v2", file: "/avatars/sarah.jpg" },
  { id: "adam", name: "Adam", tone: "Deep · American", engine: "Eleven Turbo v2.5", file: "/avatars/adam.jpg" },
  { id: "antoni", name: "Antoni", tone: "Sales · American", engine: "Eleven Multilingual v2", file: "/avatars/antoni.jpg" },
  { id: "bella", name: "Bella", tone: "Warm · American", engine: "Eleven Multilingual v2", file: "/avatars/bella.jpg" },
] as const;
