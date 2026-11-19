import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroStudio } from "@/components/hero-studio";
import { ComparisonSection } from "@/components/comparison";
import { BentoFeatures } from "@/components/bento-features";
import { VoicesSection } from "@/components/voices-section";
import { FaqSection } from "@/components/faq-section";
import { CtaBanner } from "@/components/cta-banner";
import { AuthActions } from "@/components/auth-actions";
import { CheckCircle2 } from "lucide-react";

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
            <h1 className="display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto text-center leading-[1.08]">
              An assistant that can record the screen.
              <span className="block mt-2 bg-gradient-to-r from-indigo-200 via-white to-slate-400 bg-clip-text text-transparent">
                Ask it. It answers, or it films the real page.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto text-center leading-relaxed">
              Drumreel opens like a chat. Set standing instructions once. Ask for a plan, a draft, or a video. When you ask for a video, it records the live site with a moving pointer and real typing.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex justify-center">
              <AuthActions variant="hero" />
            </div>

            {/* Micro-trust proof row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Chat, not a run form
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Your instructions on every reply
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Real page, human pointer, real typing
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
              <h2 className="text-sm font-semibold text-white">Talk to it</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                The first screen is a chat. Ask a question, paste notes, or tell it what to film.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Standing instructions</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Write how you want it to work once. Every chat uses those notes.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">Record when you ask</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Name a page and what to show. The video appears in the same thread.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <h2 className="text-sm font-semibold text-white">A person on the screen</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                The pointer moves, clicks land, and typing stays at a human pace.
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

        <FaqSection />

        {/* HIGH CONVERTING CALL TO ACTION BANNER */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
