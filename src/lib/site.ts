export const site = {
  name: "Drumreel",
  domain: "https://drumreel.com",
  email: "hello@drumreel.com",
  support: "drumreel@mubashirjamali.com",
  tagline: "The AI camera crew for your product.",
  description:
    "Write a prompt. Drumreel records your real app on screen — demos, lessons, walkthroughs, tutorials. Join the waitlist.",
};

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
