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
        <h1 className="display mt-3 text-4xl">Privacy</h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-cream-dim">
          <p>
            If you request access, we store the email you give us so we can write back. We do not sell
            that list.
          </p>
          <p>
            This marketing site does not require an account. When the product is live, we will describe
            what it stores (prompts, recordings, and billing) on this page.
          </p>
          <p>
            To be removed from the list, email {site.email}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
