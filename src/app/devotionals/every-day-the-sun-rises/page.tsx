import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Every Day the Sun Rises | Silence the Noise™ Devotional",
  description: "The sunrise is consistency. The Son is eternal promise. A daily devotional by Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Every Day the Sun Rises | Dr. Samuel E. Wilson, MD",
    description: "Before we speak, before we feel strong enough to face the day — the light comes.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function DevotionalPage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Header */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>
              ● Part of Silence the Noise™
            </Link>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              ✝ Devotional
            </span>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Faith & Spiritual Renewal
            </Link>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.2, margin: "0 0 1.5rem" }}>
            Every Day the Sun Rises
          </h1>

          {/* Scripture */}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.5rem 0", margin: "0 auto", maxWidth: 520 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "#c9a84c", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
              &ldquo;The LORD is my light and my salvation; whom shall I fear?&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>
              Psalm 27:1
            </p>
          </div>

          {/* Meta */}
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>2 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Morning · Hope · Faithfulness</span>
          </div>
        </div>
      </header>

      {/* Three-part devotional body */}
      <article style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Part 1 — Scripture */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>The Word</p>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 0 0.75rem" }}>
              &ldquo;The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: 0 }}>Psalm 27:1</p>
          </div>
        </div>

        {/* Part 2 — Reflection */}
        <div style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Reflection</p>
          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Every day the sun rises, it quietly preaches.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              It reminds us that God is still present, still faithful, still working. Before we speak, before we understand, before we feel strong enough to face the day — the light comes.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              And the significance of the Son must be folded into our hope, our faith, our strength, and our courage.
            </p>

            {/* Two-column contrast */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "2.5rem 0" }}>
              <div style={{ background: "white", padding: "1.75rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>The Sunrise</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#0f1e35", lineHeight: 1.65, margin: "0 0 0.5rem" }}>Consistency</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0 }}>&ldquo;Begin again.&rdquo;</p>
              </div>
              <div style={{ background: "#0f1e35", padding: "1.75rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>The Son</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "white", lineHeight: 1.65, margin: "0 0 0.5rem" }}>Eternal Promise</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>&ldquo;You are not alone.&rdquo;</p>
              </div>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              So let each morning become a reminder: God has not withdrawn His mercy. His presence is still near. His light still reaches the places where yesterday left shadows.
            </p>
          </div>
        </div>

        {/* Part 3 — Prayer */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Prayer</p>
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", borderLeft: "3px solid #c9a84c" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#0f1e35", lineHeight: 1.9, margin: 0 }}>
              Lord, before this day begins, I acknowledge that You are still here. You have not moved. Your faithfulness arrived before I opened my eyes. Let the light of this morning remind me of the light of Your Son — constant, present, and reaching into every shadow yesterday left behind. I will not face this day alone. Thank You for the mercy that rises with the sun.
              <span style={{ display: "block", marginTop: "1rem", fontStyle: "normal", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", color: "#9a9189", letterSpacing: "0.08em" }}>Amen.</span>
            </p>
          </div>
        </div>

        {/* Framework pillar connection */}
        <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.75rem" }}>Framework Connection</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", padding: "0.3rem 0.7rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Pillar I: Awareness
            </Link>
            <Link href="/journey#surrender" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", padding: "0.3rem 0.7rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Pillar II: Surrender
            </Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", padding: "0.3rem 0.7rem", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2 }}>
              ✝ Faith & Spiritual Renewal
            </Link>
          </div>
        </div>

        {/* Bottom framework badge */}
        <div style={{ paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2", marginBottom: "3rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/devotionals" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>← All Devotionals</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/faith", label: "Faith & Spiritual Renewal", desc: "Hearing the gentle whisper when the world is shouting." },
              { href: "/journey#surrender", label: "Pillar II: Surrender", desc: "Release what was never yours to carry." },
              { href: "/journey#awareness", label: "Pillar I: Awareness", desc: "Recognize the noise before it controls you." },
              { href: "/devotionals", label: "All Devotionals", desc: "The full devotional library — scripture, reflection, prayer." },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Author */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0f1e35", border: "1px solid rgba(201,168,76,0.3)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.8rem", color: "#c9a84c" }}>SEW</span>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.72rem", letterSpacing: "0.14em", color: "#0f1e35", margin: "0 0 0.2rem" }}>SAMUEL E. WILSON, MD</p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "#c9a84c", margin: "0 0 0.6rem", letterSpacing: "0.08em" }}>Physician · Author · Speaker</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: 0 }}>
              Dr. Wilson is a physician and faith-centered voice committed to helping people restore clarity, purpose, and hope through the Silence the Noise™ framework.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>
          His light still reaches the places where yesterday left shadows.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/devotionals" className="btn btn-gold">All Devotionals →</Link>
          <Link href="/faith" className="btn btn-outline-light">Faith & Renewal Hub</Link>
        </div>
      </section>
    </div>
  );
}
