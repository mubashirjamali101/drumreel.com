import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Two teams asked for a video of a product that would not sit still.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <h1 className="display max-w-4xl text-[clamp(3rem,8vw,5.6rem)] leading-[0.92] text-white">
            Two teams. The same ask.
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-snug text-white/70 sm:text-[22px]">
            Someone wanted a video of the product. The page had already moved.
          </p>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="block overflow-hidden rounded-3xl border border-white/10 bg-black transition hover:border-white/25"
                >
                  {story.video ? (
                    <video
                      className="aspect-video w-full object-cover"
                      poster={story.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={story.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={story.poster} alt="" className="aspect-video w-full object-cover" />
                  )}
                  <div className="px-5 py-5 sm:px-6">
                    <p className="text-[13px] text-white/45">{story.kicker}</p>
                    <p className="mt-2 text-[22px] tracking-tight text-white">{story.title}</p>
                    <p className="mt-2 text-[15px] leading-snug text-white/55">{story.lede}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
