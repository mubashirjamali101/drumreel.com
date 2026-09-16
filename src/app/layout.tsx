import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Drumreel",
    template: "%s | Drumreel",
  },
  description: site.description,
  applicationName: "Drumreel",
  keywords: [
    "product demo video",
    "automated walkthrough",
    "SaaS demo recording",
    "app tutorial",
    "screen recording",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: "Drumreel",
    title: "Drumreel",
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
      availability: "https://schema.org/PreOrder",
      description: "Request access. Drumreel is not for sale yet.",
    },
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
