import type { Metadata } from "next";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g," ")} | Silence the Noise™` };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slug.split("-").map((w: string) => w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  return (
    <div style={{ minHeight: "70vh", background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>Part of Silence the Noise™</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: 0 }}>{title}</h1>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "1.5rem", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</p>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.85 }}>Connect Sanity CMS to load this article. See <code style={{ fontSize: "0.85em", background: "#f0ebe1", padding: "0.1rem 0.3rem", borderRadius: 2 }}>src/lib/sanity.ts</code> for the query.</p>
        <div style={{ marginTop: "3rem" }}><Link href="/articles" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c" }}>← All Articles</Link></div>
      </div>
    </div>
  );
}
