export type Story = {
  slug: string;
  title: string;
  lede: string;
  kicker: string;
  poster: string;
  video?: string;
  paragraphs: string[];
  now: string[];
};

export const stories: Story[] = [
  {
    slug: "walkthroughs",
    kicker: "A product team",
    title: "The library went stale by lunch.",
    lede: "They filmed the product so the rest of the team could follow it. The product changed every day.",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
    paragraphs: [
      "They kept a library of walkthroughs. Signup. Filters. The admin view. How to invite someone. Each one was filmed by hand, written up, and left where the next person could find it.",
      "Then the platform moved. A button was renamed. A step was added. By the afternoon the morning film was wrong, and the person who followed it got stuck on a page that no longer matched the recording.",
      "So they filmed it again. The library did not get smaller. It just needed another pass, every day the product shipped.",
    ],
    now: [
      "They describe the page as it is. Drumreel writes the note and records that page.",
      "When the product changes tomorrow, they ask for the same walkthrough again. The old film is not patched. A new one is made from the live page.",
    ],
  },
  {
    slug: "each-change",
    kicker: "A delivery team",
    title: "Every change needed a film.",
    lede: "The people they built for wanted to see the work, not read a ticket. Each change left with a video.",
    poster: "/films/note.jpg",
    paragraphs: [
      "A change was not done when the code landed. Someone still had to open the product, record what moved, and send the file. The note, if it got written, came after, when someone remembered.",
      "If a question came back, they recorded another one. The film was the last task of the day, and it sat on the person who had just finished building.",
      "The next morning there was another change, and the same ask.",
    ],
    now: [
      "They say what changed. Drumreel writes the note that can be sent, then films the page.",
      "The reply is both. The next change gets its own film, from the page as it is that day.",
    ],
  },
];

export function storyBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
