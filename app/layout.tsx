import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navigation } from "@/components/layout/Navigation";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { siteConfig } from "@/data/retreat";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = getSiteUrl();
const siteTitle = "The Wanderlust Revival Retreat | Costa Rica";
const siteDescription =
  "Revive your life, health, relationships, and business during an immersive seven-night retreat at Villa Wanderlust in Costa Rica.";
const socialShareImage = "/images/retreat/wanderlust-revival-social-share.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | The Wanderlust Revival Retreat",
  },
  description: siteDescription,
  applicationName: siteConfig.name,
  keywords: [
    "Wanderlust Revival Retreat",
    "Costa Rica retreat",
    "Villa Wanderlust",
    "Jacó",
    "wellness retreat",
    "business retreat",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Wanderlust Revival Retreat",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialShareImage,
        width: 1200,
        height: 675,
        alt: "The Wanderlust Revival Retreat at Villa Wanderlust in Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialShareImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SkipToContent />
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
