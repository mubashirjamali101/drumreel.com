import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroStudio } from "@/components/hero-studio";
import { ComparisonSection } from "@/components/comparison";
import { BentoFeatures } from "@/components/bento-features";
import { VoicesSection } from "@/components/voices-section";
import { RoiCalculator } from "@/components/calculator";
import { FaqSection } from "@/components/faq-section";
import { CtaBanner } from "@/components/cta-banner";
import { AuthActions } from "@/components/auth-actions";
import { Sparkles, Video, CheckCircle2, ShieldCheck, Zap, ArrowRight, Layers, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-black text-white">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
          {/* Ambient Lighting Gradients */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-[140px] rounded-full -z-10" />
          <div className="pointer-events-none absolute top-1/3 -left-48 h-96 w-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
          <div className="pointer-events-none absolute top-1/3 -right-48 h-96 w-96 bg-emerald-600/10 blur-[120px] rounded-full -z-10" />

          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            {/* Top Announcement Pill */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                <span>Drumreel 2.0 • The Autonomous Demo Studio</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto text-center leading-[1.08]">
              Never record another Loom.
              <span className="block mt-2 bg-gradient-to-r from-indigo-200 via-white to-slate-400 bg-clip-text text-transparent">
                Your software demos. Recorded for you.
              </span>
            </h1>

            {/* Compelling Subtitle */}
            <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto text-center leading-relaxed">
              Describe what you want to show in two sentences. Drumreel launches a cloud browser, moves the mouse with human curves, types with natural cadence, and masters 1080p walkthroughs with ElevenLabs narration and talking avatars. Zero retakes. Zero camera anxiety.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex justify-center">
              <AuthActions variant="hero" />
            </div>

            {/* Micro-trust proof row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                100% Real Live DOM (No AI Hallucinations)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                60fps Human Cursor Curves
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                ElevenLabs Neural Voiceover
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                1-Click Updates on UI Changes
              </span>
            </div>

            {/* Interactive Hero Studio Console */}
            <div className="mt-14 sm:mt-20">
              <HeroStudio />
            </div>
          </div>
        </section>

        {/* 4 CORE VALUE PILLARS */}
        <section className="border-y border-white/[0.08] bg-white/[0.015] py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Product & Feature Tours</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Showcase new releases and changelogs without sitting in front of a camera for 45 minutes.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Customer Onboarding</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Step-by-step how-to videos guiding new users through critical activation milestones.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Bug & PR Reproductions</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Turn a customer issue or bug description into a crisp video reproduction for engineering.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Parallel Fleet Production</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Queue 20 product walkthroughs simultaneously across headless cloud browser workers.
              </p>
            </div>
          </div>
        </section>

        {/* LOOM KILLER COMPARISON */}
        <ComparisonSection />

        {/* BENTO GRID OF ENGINE CAPABILITIES */}
        <BentoFeatures />

        {/* NEURAL VOICES & AVATARS */}
        <VoicesSection />

        {/* TIME SAVED ROI CALCULATOR */}
        <RoiCalculator />

        {/* TRANSPARENT PRICING SECTION */}
        <section id="pricing" className="py-24 sm:py-32 border-t border-white/[0.08] relative">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 mb-4">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                Simple, Usage-Based Pricing
              </div>
              <h2 className="display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Pay only for the demos you render.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-cream-dim max-w-xl mx-auto">
                No bloated per-seat subscriptions. New accounts receive complimentary starter credits to test walkthroughs.
              </p>
            </div>

            <div className="mx-auto max-w-lg rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black p-8 sm:p-10 backdrop-blur-xl shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Drumreel Studio Access</h3>
                  <p className="text-xs text-neutral-400 mt-1">Full access to the autonomous recording engine</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  Free Starter
                </span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Autonomous browser exploration & script synthesis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>60fps human cursor physics & natural typing jitter</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Retina 2x high-DPI screencast (720p & 1080p Full HD)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>ElevenLabs neural voiceover narration library</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Picture-in-picture circular talking AI presenters</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>1-click re-runs when staging frontend updates</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <AuthActions variant="primary" className="w-full" />
                <p className="mt-3 text-center text-xs text-neutral-500">
                  Metered on completion based on exact VM runtime and media mastering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        {/* HIGH CONVERTING CALL TO ACTION BANNER */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
