import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Drumreel — Product demos, recorded for you",
    template: "%s · Drumreel",
  },
  description: site.description,
  applicationName: "Drumreel",
  keywords: [
    "product demo video",
    "automated walkthrough",
    "SaaS demo recording",
    "Playwright demo",
    "sales demo MP4",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: "Drumreel",
    title: "Ditch 95% of your Looms. Drumreel films the product.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumreel",
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Drumreel",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.domain,
    description: site.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "50 credits after email verification",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-ink text-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
