import type { Metadata } from "next";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g," ")} | Silence the Noise™` };
}

export default async function DevotionalPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.split("-").map((w: string) => w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  return (
    <div style={{ minHeight: "70vh", background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Devotional</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: 0 }}>{title}</h1>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256" }}>Connect Sanity CMS to load this devotional.</p>
        <div style={{ marginTop: "2rem" }}><Link href="/devotionals" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c" }}>← All Devotionals</Link></div>
      </div>
    </div>
  );
}
