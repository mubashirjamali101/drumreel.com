export const site = {
  name: "Drumreel",
  // Primary host: Vercel 308-redirects the apex to www, so canonical/sitemap URLs use www.
  domain: "https://www.drumreel.com",
  app: "https://app.drumreel.com",
  email: "hello@drumreel.com",
  support: "drumreel@mubashirjamali.com",
  tagline: "A smart assistant that records the real screen.",
  description:
    "Talk to Drumreel like a chat. Ask it to plan, draft, or record a real page with a human pointer and typing.",
};

export const hosts = [
  { id: "sarah", name: "Sarah", role: "Product", file: "/avatars/sarah.jpg" },
  { id: "alex", name: "Alex", role: "Engineering", file: "/avatars/alex.jpg" },
  { id: "marcus", name: "Marcus", role: "Sales", file: "/avatars/marcus.jpg" },
  { id: "elena", name: "Elena", role: "Support", file: "/avatars/elena.jpg" },
] as const;

export const voices = [
  { id: "rachel", name: "Rachel", tone: "Calm", engine: "ElevenLabs", file: "/avatars/sarah.jpg" },
  { id: "adam", name: "Adam", tone: "Steady", engine: "ElevenLabs", file: "/avatars/adam.jpg" },
  { id: "antoni", name: "Antoni", tone: "Warm", engine: "ElevenLabs", file: "/avatars/antoni.jpg" },
  { id: "bella", name: "Bella", tone: "Clear", engine: "ElevenLabs", file: "/avatars/bella.jpg" },
] as const;
