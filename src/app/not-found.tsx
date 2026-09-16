import Link from "next/link";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="text-[11px] tracking-[0.14em] text-cream-dim">404</p>
        <h1 className="display mt-4 text-4xl">This page is not here.</h1>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-full border border-line px-5 py-3 text-sm text-cream-dim hover:text-cream">
            Home
          </Link>
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  );
}
