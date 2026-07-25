import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navigation } from "@/components/layout/Navigation";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { siteConfig } from "@/data/retreat";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Wanderlust Revival Retreat | Costa Rica",
    template: "%s | The Wanderlust Revival Retreat",
  },
  description: siteConfig.description,
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "The Wanderlust Revival Retreat | Costa Rica",
    description: siteConfig.description,
    images: [
      {
        url: "/images/retreat/hero-pool-pavilion.png",
        width: 1200,
        height: 630,
        alt: "Villa Wanderlust jungle pool and pavilion in Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wanderlust Revival Retreat | Costa Rica",
    description: siteConfig.description,
    images: ["/images/retreat/hero-pool-pavilion.png"],
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
