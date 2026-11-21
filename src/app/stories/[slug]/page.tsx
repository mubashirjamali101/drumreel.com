import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";
import { stories, storyBySlug } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) return { title: "Story" };
  return {
    title: story.title,
    description: story.lede,
    alternates: { canonical: `/stories/${story.slug}` },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) notFound();

  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <article className="mx-auto max-w-3xl px-4 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <Link href="/stories" className="text-[14px] text-white/50 transition hover:text-white">
            Stories
          </Link>
          <p className="mt-8 text-[14px] text-white/45">{story.kicker}</p>
          <h1 className="display mt-3 text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.94] text-white">{story.title}</h1>
          <p className="mt-5 text-[18px] leading-snug text-white/70 sm:text-[21px]">{story.lede}</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
            {story.video ? (
              <video
                className="aspect-video w-full object-cover"
                poster={story.poster}
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src={story.video} type="video/mp4" />
              </video>
            ) : (
              <img src={story.poster} alt="" className="aspect-video w-full object-cover" />
            )}
          </div>
          <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-white/80 sm:text-[18px]">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="display mt-12 text-[clamp(2rem,5vw,3rem)] leading-[0.95] text-white">What they do now</h2>
          <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-white/80 sm:text-[18px]">
            {story.now.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12">
            <AuthActions variant="primary" />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
