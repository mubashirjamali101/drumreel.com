"use client";

import { useState } from "react";

const examples = [
  {
    id: "signup",
    label: "Signup",
    ask: "Record the partner signup. Choose dentists, fill the account form, and stop when it is ready to submit.",
    reply: "Opening the partner page and filling the form.",
    poster: "/demos/signup.jpg",
    video: "/demos/signup.mp4",
  },
  {
    id: "filters",
    label: "Release",
    ask: "Draft the release note in four lines, then record the new filters on the activity table.",
    reply: "Filters now keep a segment and a date together. The empty state says what is missing. Recording that table now.",
    poster: "/demos/filters.jpg",
    video: "/demos/filters.mp4",
  },
  {
    id: "gallery",
    label: "Again",
    ask: "Record the gallery the way you did last week. Scroll, open one piece, and stop.",
    reply: "Using the gallery you already opened. A shorter take this time.",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
  },
] as const;

export function WorkExamples() {
  const [active, setActive] = useState(0);
  const example = examples[active] ?? examples[0];

  return (
    <div id="work" className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-[28px] bg-white text-left shadow-[0_40px_80px_-48px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.06]">
        <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-3.5">
          <p className="text-[13px] font-medium text-[#1d1d1f]">Drumreel</p>
          <p className="text-[12px] text-[#6e6e73]">New chat</p>
        </div>
        <div className="space-y-6 px-5 py-8 sm:px-8">
          <p className="ml-auto max-w-[32rem] rounded-[22px] bg-[#f5f5f7] px-4 py-3 text-[15px] leading-relaxed text-[#1d1d1f]">
            {example.ask}
          </p>
          <div className="max-w-[36rem] text-[15px] leading-relaxed text-[#1d1d1f]">
            <p>{example.reply}</p>
            <video
              key={example.video}
              className="mt-4 aspect-video w-full rounded-2xl bg-[#f5f5f7] object-cover"
              poster={example.poster}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={example.video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center rounded-full border border-black/10 bg-white px-4 py-3 text-[15px] text-[#6e6e73]">
            <span>Ask for the work</span>
            <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#1d1d1f] text-[13px] text-white">
              ↑
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-6 text-[14px]">
        {examples.map((item, index) => {
          const on = index === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={on ? "text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
