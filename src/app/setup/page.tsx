import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { agentLine } from "@/lib/agent-line";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Setup",
  description: "Sign in. That is the whole Drumreel setup.",
  alternates: { canonical: "/setup" },
};

export default function SetupPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip px-4 py-14 sm:px-8 sm:py-24">
        <article className="mx-auto max-w-2xl">
          <p className="text-[13px] text-[#6e6e73]">For the agent setting this up</p>
          <h1 className="display mt-3 text-[clamp(2.6rem,8vw,4.5rem)] leading-[0.95] text-[#1d1d1f]">
            Sign in. That is the setup.
          </h1>
          <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-[#1d1d1f] sm:text-[18px]">
            <p>
              Drumreel is ready when this person is signed in. There is no MCP server, no config file, and no key to install.
            </p>
            <p>Open {site.app}/login in their browser and ask them to sign in.</p>
            <p>When the browser reaches {site.app}/app, setup is finished. They talk to Drumreel in that chat.</p>
            <p>Do not invent credentials. Do not ask them to edit environment files.</p>
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-[#6e6e73]">The line they copied:</p>
          <p className="mt-2 rounded-3xl bg-white px-4 py-4 text-[15px] leading-relaxed break-words sm:px-5">{agentLine}</p>
          <a
            href={`${site.app}/login`}
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-5 text-[15px] font-medium text-white transition hover:bg-black"
          >
            Sign in
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
