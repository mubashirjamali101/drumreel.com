"use client";

import { useState } from "react";

const examples = [
  {
    id: "signup",
    label: "Signup",
    title: "Show a new partner how to join",
    ask: "Record the partner signup. Choose dentists, fill the account form, and stop when it is ready to submit.",
    status: "Opening the partner page. Filling the form.",
    poster: "/demos/signup.jpg",
    video: "/demos/signup.mp4",
  },
  {
    id: "filters",
    label: "Release",
    title: "Write the note, then film the change",
    ask: "Draft the release note in four lines, then record the new filters on the activity table.",
    status: "Note drafted. Recording the filters.",
    note: "Filters now keep a segment and a date together. The empty state says what is missing. Export follows the same selection.",
    poster: "/demos/filters.jpg",
    video: "/demos/filters.mp4",
  },
  {
    id: "gallery",
    label: "Again",
    title: "Same path, shorter this time",
    ask: "Record the gallery the way you did last week. Scroll, open one piece, and stop.",
    status: "Using the gallery you already opened. Recording a shorter take.",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
  },
] as const;

export function WorkExamples() {
  const [active, setActive] = useState(0);
  const example = examples[active] ?? examples[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
        {examples.map((item, index) => {
          const on = index === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-left text-sm lg:rounded-lg lg:px-3 lg:py-2 ${
                on ? "bg-white text-neutral-950" : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div>
        <p className="text-xs tracking-[0.14em] text-neutral-500">0{active + 1}</p>
        <h3 className="display mt-3 max-w-xl text-3xl text-white sm:text-4xl">{example.title}</h3>
        <blockquote className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-200 sm:text-xl">
          {example.ask}
        </blockquote>
        <p className="mt-4 text-sm text-neutral-500">{example.status}</p>
        {"note" in example && example.note ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300">{example.note}</p>
        ) : null}
        <video
          key={example.video}
          className="mt-8 aspect-video w-full rounded-2xl bg-neutral-900 object-cover"
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
  );
}
