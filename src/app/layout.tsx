import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelewilson.org"),
  title: { default: "Silence the Noise™ | Dr. Samuel E. Wilson, MD", template: "%s | Silence the Noise™" },
  description: "A physician-led, faith-centered framework for anxiety, depression, PTSD, purpose, and spiritual renewal. Where Scripture meets neuroscience.",
  keywords: ["anxiety","depression","PTSD","faith","spiritual renewal","physician","mental health","Christian","neuroscience","Samuel Wilson MD","Silence the Noise"],
  authors: [{ name: "Dr. Samuel E. Wilson, MD" }],
  openGraph: {
    type: "website", locale: "en_US", url: "https://samuelewilson.org", siteName: "Silence the Noise™",
    title: "Silence the Noise™ | Dr. Samuel E. Wilson, MD",
    description: "One system. One journey. One framework. One message.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silence the Noise™ | Dr. Samuel E. Wilson, MD",
    description: "A physician-led, faith-centered framework for healing and purpose.",
    images: ["/images/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0f1e35" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `:root{--font-cinzel:'Cinzel',serif;--font-cormorant:'Cormorant Garamond',Georgia,serif;--font-inter:'Inter',system-ui,sans-serif;}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: "Silence the Noise™", url: "https://samuelewilson.org",
          founder: { "@type": "Person", name: "Samuel E. Wilson", jobTitle: "MD, Physician, Author, Speaker" },
        })}} />
      </head>
      <body>
        <ClerkWrapper>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </ClerkWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

// Conditionally wrap with ClerkProvider only when keys are present
async function ClerkWrapper({ children }: { children: React.ReactNode }) {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!hasClerk) return <>{children}</>;
  const { ClerkProvider } = await import("@clerk/nextjs");
  return <ClerkProvider>{children}</ClerkProvider>;
}
