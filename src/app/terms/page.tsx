import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-sm text-cream-dim">Last updated September 2026</p>
        <h1 className="display mt-3 text-4xl">Terms of Service</h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-cream-dim">
          <p>
            By creating an account or using Drumreel you agree to these terms. You must verify the email
            on the account before starting a walkthrough or buying credits.
          </p>
          <h2 className="text-cream">What Drumreel does</h2>
          <p>
            You give us a public HTTPS URL and a brief. We drive that site with a headless browser, send
            screenshots and the brief to a third-party AI provider, record a video, and store it. Optional
            voiceover uses ElevenLabs. You must have permission to record the target application.
          </p>
          <h2 className="text-cream">Credits and payments</h2>
          <p>
            Usage is billed in credits. A new account receives 50 credits after email verification.
            Starter and Pro subscriptions grant credits each paid Stripe invoice. Extra packs are one-time
            Stripe Checkout. Credits are added only after Stripe reports the payment as paid. Studio is
            sold by contacting sales.
          </p>
          <p>
            We reserve an estimate when you queue a run and settle when the video is stored. If the run
            errors or is cancelled before that settle, the reservation is refunded.
          </p>
          <h2 className="text-cream">Contact</h2>
          <p>
            {site.email}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
