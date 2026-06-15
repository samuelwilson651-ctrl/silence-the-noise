import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Speaking | Silence the Noise™" };

export default function Page() {
  return (
    <div style={{ minHeight: "70vh", background: "#faf7f2", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.5rem", padding: "6rem 2rem", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c" }}>Silence the Noise™</p>
      <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", margin: 0 }}>Speaking</h1>
      <div style={{ width: 44, height: 2, background: "#c9a84c" }} />
      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
        Connect your Sanity CMS to populate this page with articles, devotionals, and framework content.
      </p>
      <Link href="/" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#0f1e35", color: "white", display: "inline-flex", marginTop: "1rem" }}>
        ← Back to Home
      </Link>
    </div>
  );
}
