import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthActions } from "@/components/auth-actions";

const moments = [
  {
    src: "/films/board.jpg",
    title: "Three things waiting.",
    body: "Northline is the one that is ready.",
  },
  {
    src: "/films/note.jpg",
    title: "Ship Friday.",
    body: "The note sits on the file.",
  },
  {
    src: "/films/approved.jpg",
    title: "Filed with the team.",
    body: "Second pass. Thursday.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-5 pb-6 pt-16 text-center sm:px-8 sm:pt-28">
          <p className="text-[13px] tracking-tight text-[#6e6e73]">Marlow</p>
          <h1 className="display mx-auto mt-3 max-w-4xl text-[64px] leading-[0.92] text-[#1d1d1f] sm:text-8xl lg:text-[112px]">
            Approved.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[19px] leading-relaxed text-[#6e6e73] sm:text-[21px]">
            Ship Friday. Filed with the team.
          </p>
        </section>

        <section id="film" className="px-4 pb-20 sm:px-8 sm:pb-28">
          <video
            className="mx-auto aspect-video w-full max-w-6xl rounded-[28px] bg-[#1d1d1f] object-cover shadow-[0_40px_80px_-48px_rgba(0,0,0,0.55)]"
            poster="/films/board.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/films/marlow.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 sm:px-8 md:grid-cols-3 md:pb-32">
          {moments.map((item) => (
            <figure key={item.title}>
              <img src={item.src} alt="" className="aspect-video w-full rounded-3xl object-cover" />
              <figcaption className="mt-4">
                <h2 className="display text-[26px] leading-tight text-[#1d1d1f]">{item.title}</h2>
                <p className="mt-2 text-[17px] leading-relaxed text-[#6e6e73]">{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <img src="/films/project.jpg" alt="" className="aspect-video w-full rounded-[28px] object-cover" />
            <div className="mt-8 max-w-xl">
              <h2 className="display text-4xl leading-tight text-[#1d1d1f] sm:text-6xl">The coast, kept quiet.</h2>
              <p className="mt-4 text-[19px] leading-relaxed text-[#6e6e73]">
                Homepage, second pass. The photograph is wider. The serif stays.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1d1d1f] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] text-white/50">Northline</p>
              <h2 className="display mt-3 text-5xl leading-[0.95] sm:text-7xl">Ship Friday</h2>
              <p className="mt-5 max-w-sm text-[19px] leading-relaxed text-white/70">
                The review ends on the page the team will see.
              </p>
            </div>
            <img src="/films/approved.jpg" alt="" className="aspect-video w-full rounded-[28px] object-cover" />
          </div>
        </section>

        <section className="px-5 py-28 text-center sm:py-36">
          <h2 className="display text-6xl text-[#1d1d1f] sm:text-8xl">Drumreel.</h2>
          <div className="mt-8 flex justify-center">
            <AuthActions variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
