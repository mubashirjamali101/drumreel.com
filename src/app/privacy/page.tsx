import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-sm text-cream-dim">Last updated September 2026</p>
        <h1 className="display mt-3 text-4xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-cream-dim">
          <p>
            We collect account email and name, password hash, Stripe billing identifiers, walkthrough
            prompts, target URLs, generated scripts, screenshots, and video files. We send verification
            and password-reset mail to the address you give us.
          </p>
          <p>
            Screenshots, page text, and prompts go to the AI provider for the run (OpenAI or Anthropic).
            Optional narration goes to ElevenLabs. Card data stays with Stripe. Object storage holds
            videos. Email is sent through Resend or SMTP.
          </p>
          <p>
            You can delete a finished run in the studio. To delete an account, email {site.email} or{" "}
            {site.support}.
          </p>
          <p>
            We set an HttpOnly session cookie on the app host that lasts 14 days. This marketing site
            does not require an account cookie.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
