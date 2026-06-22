import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Create Account | Silence the Noise™" };

export default function SignupPage() {
  return (
    <div style={{ background: "#faf7f2", minHeight: "80vh", display: "flex", alignItems: "center", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 420, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.9rem", letterSpacing: "0.14em", color: "#0f1e35" }}>
            Silence the Noise<sup style={{ fontSize: "0.55em" }}>™</sup>
          </Link>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", fontWeight: 600, color: "#0f1e35", margin: "1.25rem 0 0.5rem" }}>Join the Community</h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0 }}>One system. One journey. One message.</p>
        </div>
        <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", marginBottom: "1.75rem" }}>
            {[["Articles & Devotionals","All published content — free"],["Podcast & Video Library","Full archive — members only"],["Monthly Live Q&A","Submit questions to Dr. Wilson"],["7-Day Reset Protocol","PDF workbook included"]].map(([title, note]) => (
              <div key={title} style={{ background: "white", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#0f1e35" }}>{title}</span>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{note}</span>
              </div>
            ))}
          </div>
          <Link href="/membership" className="btn btn-gold" style={{ justifyContent: "center", width: "100%", marginBottom: "0.75rem" }}>View Membership Plans →</Link>
          <Link href="/login" style={{ display: "block", textAlign: "center", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", marginTop: "0.5rem" }}>Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}
