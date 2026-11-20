import Link from "next/link";
import { AuthActions } from "@/components/auth-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="font-mono text-[13px] text-white/45">// 404</p>
        <h1 className="display mt-3 text-5xl text-white">This page is not here.</h1>
        <div className="mt-8 flex items-center justify-center gap-5">
          <Link href="/" className="text-[15px] text-white/70 hover:text-white">
            Home
          </Link>
          <AuthActions variant="primary" />
        </div>
      </main>
      <Footer />
    </>
  );
}
