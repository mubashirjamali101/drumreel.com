export const site = {
  name: "Drumreel",
  domain: "https://drumreel.com",
  email: "hello@drumreel.com",
  support: "drumreel@mubashirjamali.com",
  tagline: "Screen recordings of your live product.",
  description:
    "Describe what to show. Drumreel records your real app on screen. Use it for demos, lessons, walkthroughs, and tutorials.",
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
