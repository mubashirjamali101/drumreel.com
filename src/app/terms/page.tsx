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
        <h1 className="display mt-3 text-4xl">Terms</h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-cream-dim">
          <p>
            This site is a public page for Drumreel. If you leave an email to request access, you agree
            that we may write to that address about the product.
          </p>
          <p>
            When Drumreel is available, using it will mean you have the right to record the pages you
            submit, and that you accept the terms we publish then. We will keep this page current.
          </p>
          <p>
            Questions: {site.email}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
