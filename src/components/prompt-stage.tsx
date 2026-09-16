"use client";

import { useEffect, useState } from "react";

const DEMOS = [
  {
    id: "signup",
    prompt: "Record a video of the sign up flow",
    poster: "/demos/signup.jpg",
    video: "/demos/signup.mp4",
    file: "Signup flow",
    avatar: "/avatars/sarah.jpg",
    voice: "Rachel · ElevenLabs",
  },
  {
    id: "filters",
    prompt: "Record a demo video of filters bug fix",
    poster: "/demos/filters.jpg",
    video: "/demos/filters.mp4",
    file: "Filters walkthrough",
    avatar: "/avatars/alex.jpg",
    voice: "Adam · ElevenLabs",
  },
  {
    id: "gallery",
    prompt: "Showcase the gallery feature",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
    file: "Gallery tour",
    avatar: "/avatars/elena.jpg",
    voice: "Bella · ElevenLabs",
  },
  {
    id: "admin",
    prompt:
      "Login as admin on the admin panel and demo the user management flow, admin creds: admin@example.com Star#Tw0w4ke",
    poster: "/demos/admin.jpg",
    video: "/demos/admin.mp4",
    file: "Admin walkthrough",
    avatar: "/avatars/marcus.jpg",
    voice: "Antoni · ElevenLabs",
  },
] as const;

function Stage({
  demo,
  onDone,
}: {
  demo: (typeof DEMOS)[number];
  onDone: () => void;
}) {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"type" | "record" | "play">("type");

  useEffect(() => {
    let i = 0;
    const speed = demo.prompt.length > 80 ? 12 : 22;
    const typer = window.setInterval(() => {
      i += 1;
      setTyped(demo.prompt.slice(0, i));
      if (i >= demo.prompt.length) {
        window.clearInterval(typer);
        setPhase("record");
        window.setTimeout(() => setPhase("play"), 700);
      }
    }, speed);
    return () => window.clearInterval(typer);
  }, [demo.prompt]);

  useEffect(() => {
    if (phase !== "play") return;
    const hold = window.setTimeout(onDone, 6200);
    return () => window.clearTimeout(hold);
  }, [phase, onDone]);

  return (
    <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between text-[11px] text-cream-dim">
          <span className="tracking-[0.14em]">prompt</span>
          <span>you type this · we record it</span>
        </div>
        <p className="mt-5 min-h-[7.5rem] text-[15px] leading-relaxed text-cream">
          {typed}
          <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-cream align-middle" />
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-[12px]">
          <span className="text-cream-dim">
            {phase === "type" && "writing…"}
            {phase === "record" && "filming…"}
            {phase === "play" && "ready"}
          </span>
          <span className="rounded-md bg-cream px-3 py-1.5 text-[12px] font-medium text-ink">Record</span>
        </div>
      </div>

      <div className="relative aspect-video bg-black lg:aspect-auto lg:min-h-[340px]">
        {phase === "play" ? (
          <video
            key={demo.video}
            className="h-full w-full object-cover"
            src={demo.video}
            poster={demo.poster}
            autoPlay
            muted
            playsInline
            loop
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={demo.poster} alt="" className="h-full w-full object-cover opacity-50" />
        )}
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/50 px-2.5 py-1 text-[11px] text-white backdrop-blur-md">
          <span className={`h-1.5 w-1.5 rounded-full ${phase === "play" ? "bg-emerald-400" : "animate-pulse bg-red-500"}`} />
          {phase === "play" ? "DONE" : "REC"}
        </div>
        <div className="absolute bottom-3 left-3 right-20 rounded-lg bg-black/45 px-3 py-2 text-[11px] text-white backdrop-blur-md">
          <p className="font-medium">{demo.file}</p>
          <p className="text-white/70">{demo.voice}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={demo.avatar}
          alt=""
          className="absolute bottom-3 right-3 h-16 w-16 rounded-full object-cover ring-2 ring-white/80"
        />
      </div>
    </div>
  );
}

export function PromptStage() {
  const [index, setIndex] = useState(0);
  const demo = DEMOS[index];

  return (
    <div className="glass overflow-hidden">
      <Stage key={demo.id} demo={demo} onDone={() => setIndex((n) => (n + 1) % DEMOS.length)} />
      <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-2">
        {DEMOS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] tracking-wide ${
              i === index ? "bg-white/15 text-cream" : "text-cream-dim hover:text-cream"
            }`}
          >
            {item.id}
          </button>
        ))}
      </div>
    </div>
  );
}
