"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  MousePointer,
  Keyboard,
  Cpu,
  CheckCircle2,
  Mic,
  Film,
} from "lucide-react";

export interface DemoItem {
  id: string;
  badge: string;
  title: string;
  prompt: string;
  targetUrl: string;
  poster: string;
  video: string;
  avatar: string;
  presenterName: string;
  voiceName: string;
  voiceTone: string;
  actions: string[];
}

const DEMOS: DemoItem[] = [
  {
    id: "signup",
    badge: "Auth Flow",
    title: "User Signup & Onboarding",
    prompt: "Open staging, navigate through registration, fill out user profile, and verify email confirmation banner.",
    targetUrl: "https://staging.app.io/auth/signup",
    poster: "/demos/signup.jpg",
    video: "/demos/signup.mp4",
    avatar: "/avatars/sarah.jpg",
    presenterName: "Sarah",
    voiceName: "Rachel",
    voiceTone: "Calm & Professional",
    actions: ["Open https://staging.app.io", "Click 'Create Account'", "Type user credentials (58 WPM)", "Assert welcome dashboard"],
  },
  {
    id: "filters",
    badge: "Bug Walkthrough",
    title: "Smart Filters & Query Fix",
    prompt: "Demo the multi-select filter fix on the analytics table: apply segment, date range, and export CSV.",
    targetUrl: "https://staging.app.io/analytics/activity",
    poster: "/demos/filters.jpg",
    video: "/demos/filters.mp4",
    avatar: "/avatars/alex.jpg",
    presenterName: "Alex",
    voiceName: "Adam",
    voiceTone: "Authoritative Tech",
    actions: ["Navigate to Activity Table", "Hover 'Filter by Segment'", "Check 'By Role' & 'By Region'", "Verify active filter tag"],
  },
  {
    id: "gallery",
    badge: "Product Showcase",
    title: "Media Gallery & Assets",
    prompt: "Showcase the new responsive gallery view, hover thumbnail previews, and demo lightbox inspection.",
    targetUrl: "https://staging.app.io/gallery/explore",
    poster: "/demos/gallery.jpg",
    video: "/demos/gallery.mp4",
    avatar: "/avatars/elena.jpg",
    presenterName: "Elena",
    voiceName: "Bella",
    voiceTone: "Upbeat & Clear",
    actions: ["Open Media Hub", "Scroll 1200px down with easing", "Hover grid card #4", "Trigger lightbox modal"],
  },
  {
    id: "admin",
    badge: "Enterprise",
    title: "Admin Panel & RBAC Roles",
    prompt: "Sign in with admin credentials, open user management table, elevate user permissions to Admin, and save.",
    targetUrl: "https://staging.app.io/admin/roles",
    poster: "/demos/admin.jpg",
    video: "/demos/admin.mp4",
    avatar: "/avatars/marcus.jpg",
    presenterName: "Marcus",
    voiceName: "Antoni",
    voiceTone: "Warm & Direct",
    actions: ["Enter admin credentials (masked)", "Submit authentication", "Open Team Settings", "Update role to 'Workspace Admin'"],
  },
];

export function HeroStudio() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeDemo = DEMOS[activeIdx] ?? DEMOS[0];
  const [typedPrompt, setTypedPrompt] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Typewriter effect for prompt
  useEffect(() => {
    let i = 0;
    setTypedPrompt("");
    const target = activeDemo.prompt;
    const timer = setInterval(() => {
      i++;
      setTypedPrompt(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [activeIdx, activeDemo.prompt]);

  // Sync video play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [activeIdx]);

  function togglePlay() {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  function restartVideo() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  }

  return (
    <div id="interactive-studio" className="relative mx-auto max-w-6xl">
      {/* Studio Window Chrome */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
        {/* Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-white/[0.02] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-3 hidden sm:flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1 text-xs font-mono text-neutral-400 border border-white/5">
              <span className="text-emerald-400">https://</span>
              <span>app.drumreel.com/studio/session</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-medium text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Cloud Worker Active
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline text-neutral-400 font-mono text-[11px]">1080p 60fps • 2x Retina</span>
          </div>
        </div>

        {/* Workflow Quick-Switch Tabs */}
        <div className="flex overflow-x-auto border-b border-white/[0.06] bg-black/40 px-4 py-2 sm:px-6 scrollbar-none gap-2">
          {DEMOS.map((demo, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white shadow-xs border border-white/15"
                    : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200 border border-transparent"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-indigo-400" : "bg-neutral-600"}`} />
                <span>{demo.title}</span>
                <span className="rounded bg-white/5 px-1.5 py-0.2 text-[10px] text-neutral-400">
                  {demo.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Split Studio Stage (Console Left / Mastered Film Right) */}
        <div className="grid lg:grid-cols-12 min-h-[480px]">
          {/* Left: Autonomous Script Director & Telemetry (5 cols) */}
          <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] p-5 sm:p-6 lg:col-span-5 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="space-y-4">
              {/* Prompt Input Preview */}
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="flex items-center gap-1.5 font-medium text-white">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    Autonomous Scenario Prompt
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">Input</span>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-black/60 p-3.5 text-xs font-mono leading-relaxed text-neutral-200 shadow-inner min-h-[92px]">
                  <span>{typedPrompt}</span>
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-indigo-400 animate-pulse align-middle" />
                </div>
              </div>

              {/* Engine Physics & Telemetry Badges */}
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <MousePointer className="h-3 w-3 text-indigo-400" />
                    <span>Cursor Physics</span>
                  </div>
                  <p className="mt-1 font-mono font-medium text-neutral-200">60fps Bézier Path</p>
                </div>

                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Keyboard className="h-3 w-3 text-emerald-400" />
                    <span>Typing Dynamics</span>
                  </div>
                  <p className="mt-1 font-mono font-medium text-neutral-200">58 WPM • Human Jitter</p>
                </div>

                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Mic className="h-3 w-3 text-purple-400" />
                    <span>ElevenLabs Audio</span>
                  </div>
                  <p className="mt-1 font-mono font-medium text-neutral-200">{activeDemo.voiceName} ({activeDemo.voiceTone})</p>
                </div>

                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Film className="h-3 w-3 text-amber-400" />
                    <span>Retina Mastering</span>
                  </div>
                  <p className="mt-1 font-mono font-medium text-neutral-200">2x Scale • 1080p CRF 18</p>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-medium text-neutral-400">Automated Step Pipeline:</span>
                <div className="space-y-1 text-[11px] text-neutral-300">
                  {activeDemo.actions.map((act, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-md bg-white/[0.015] px-2.5 py-1 border border-white/[0.04]">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
              <span>Zero manual clicks</span>
              <span className="text-emerald-400 font-medium">Headless VM Execution</span>
            </div>
          </div>

          {/* Right: Mastered Video Screen (7 cols) */}
          <div className="relative flex flex-col justify-between lg:col-span-7 bg-black overflow-hidden group">
            {/* The Actual Demo Video */}
            <div className="relative aspect-video w-full h-full flex items-center justify-center bg-neutral-950">
              <video
                ref={videoRef}
                src={activeDemo.video}
                poster={activeDemo.poster}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />

              {/* Floating Top Left Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md border border-white/10 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span>Recording Take: Final</span>
              </div>

              {/* Overlay: Presenter Avatar (Picture-in-Picture) */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2.5 rounded-full bg-neutral-950/80 p-1.5 pr-3 backdrop-blur-md border border-white/15 shadow-xl">
                <div className="relative">
                  <Image
                    src={activeDemo.avatar}
                    alt={activeDemo.presenterName}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover border border-white/20"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-black" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white leading-tight">{activeDemo.presenterName}</p>
                  <p className="text-[10px] text-neutral-400">AI Presenter</p>
                </div>
              </div>

              {/* Overlay: ElevenLabs Audio Track Badge */}
              <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 rounded-xl bg-neutral-950/80 px-3 py-1.5 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center gap-0.5 text-indigo-400">
                  <span className="inline-block w-0.5 h-3 bg-indigo-400 animate-pulse" />
                  <span className="inline-block w-0.5 h-4 bg-indigo-400 animate-pulse delay-75" />
                  <span className="inline-block w-0.5 h-2 bg-indigo-400 animate-pulse delay-150" />
                </div>
                <div className="text-left text-[11px]">
                  <span className="text-white font-medium">{activeDemo.voiceName}</span>
                  <span className="text-neutral-400 ml-1.5">• ElevenLabs HD</span>
                </div>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-neutral-950/90 px-4 py-2.5 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                </button>
                <button
                  type="button"
                  onClick={restartVideo}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all active:scale-95"
                  aria-label="Restart video"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/10 transition-all"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="h-3.5 w-3.5 text-neutral-400" /> : <Volume2 className="h-3.5 w-3.5 text-indigo-400" />}
                  <span className="text-[11px] font-medium">{isMuted ? "Unmute Voice" : "Audio On"}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-neutral-400">
                  Demo {activeIdx + 1} of {DEMOS.length}
                </span>
                <div className="flex gap-1">
                  {DEMOS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-4 bg-indigo-400" : "w-1.5 bg-neutral-700"}`}
                      aria-label={`Go to demo ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
