import Link from "next/link";
import { AuthActions } from "@/components/auth-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="text-[13px] text-[#6e6e73]">404</p>
        <h1 className="display mt-3 text-5xl text-[#1d1d1f]">This page is not here.</h1>
        <div className="mt-8 flex items-center justify-center gap-5">
          <Link href="/" className="text-[15px] text-[#0066cc] hover:underline">
            Home
          </Link>
          <AuthActions variant="primary" />
        </div>
      </main>
      <Footer />
    </>
  );
}
