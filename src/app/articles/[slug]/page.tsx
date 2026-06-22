import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article | Silence the Noise™",
};

export default function ArticleSlugPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ background: "#faf7f2", minHeight: "70vh", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Article</p>
        <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.5rem" }}>
          {params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
        </h1>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", margin: "0 0 2.5rem", lineHeight: 1.8 }}>
          This article is being prepared for publication. Please check back soon.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/articles" className="btn btn-gold">All Articles →</Link>
          <Link href="/framework" className="btn btn-outline-dark">Explore the Framework</Link>
        </div>
      </div>
    </div>
  );
}
