import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

const cinzel     = Cinzel({ subsets: ["latin"], weight: ["400","600"], variable: "--font-cinzel", display: "swap" });
const cormorant  = Cormorant_Garamond({ subsets: ["latin"], weight: ["300","400","600","700"], style: ["normal","italic"], variable: "--font-cormorant", display: "swap" });
const inter      = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelewilson.org"),
  title: { default: "Silence the Noise™ | Dr. Samuel E. Wilson, MD", template: "%s | Silence the Noise™" },
  description: "A physician-led, faith-centered framework for anxiety, depression, PTSD, purpose, and spiritual renewal. Where Scripture meets neuroscience.",
  keywords: ["anxiety","depression","PTSD","faith","spiritual renewal","physician","mental health","Christian","neuroscience","Samuel Wilson MD","Silence the Noise"],
  authors: [{ name: "Dr. Samuel E. Wilson, MD" }],
  openGraph: { type: "website", locale: "en_US", url: "https://samuelewilson.org", siteName: "Silence the Noise™", title: "Silence the Noise™ | Dr. Samuel E. Wilson, MD", description: "One system. One journey. One framework. One message.", images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Silence the Noise™ | Dr. Samuel E. Wilson, MD", description: "A physician-led, faith-centered framework for healing and purpose.", images: ["/images/og-default.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0f1e35" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
        <head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Silence the Noise™", url: "https://samuelewilson.org", founder: { "@type": "Person", name: "Samuel E. Wilson", jobTitle: "MD, Physician, Author, Speaker" } }) }} />
        </head>
        <body>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
