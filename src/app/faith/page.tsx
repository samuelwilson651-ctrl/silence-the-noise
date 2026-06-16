import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faith & Spiritual Renewal | Silence the Noise™",
  description: "Hearing the gentle whisper when the world is shouting. Physician-led, scripture-rooted reflections on faith, prayer, purpose, and spiritual renewal.",
};

const devotionals = [
  { href: "/devotionals/every-day-the-sun-rises", title: "Every Day the Sun Rises", scripture: "Psalm 27:1", desc: "Before we speak, before we feel strong enough — the light comes. The sunrise preaches consistency. The Son speaks eternal promise.", type: "Devotional" },
];

const comingDevotionals = ["The Gentle Whisper","Follow Me","The Armor of God","Trust Beyond Understanding","Word Idolatry","Purpose in Christ","The Remnant Within the Noise","The Difference Between Prayer and Worship"];

export default function FaithPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>✝</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Topic Hub · Pillars II & III</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Faith &amp; Spiritual Renewal</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Spiritual exhaustion is real. These writings explore prayer, trust, purpose in Christ, and what it means to hear the gentle whisper when the world is shouting.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Published */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Published</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
            {devotionals.map((d) => (
              <Link key={d.href} href={d.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{d.type}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.35rem,2.5vw,1.75rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem" }}>{d.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#c9a84c", margin: "0 0 0.75rem" }}>{d.scripture}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: "0 0 1rem" }}>{d.desc}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Read →</span>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1rem", marginBottom: "4rem" }}>
            {comingDevotionals.map(title => (
              <div key={title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem", opacity: 0.65 }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189", margin: 0 }}>Devotional · Coming soon</p>
              </div>
            ))}
          </div>

          {/* App */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Devotional Discoveries App</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", fontWeight: 600, color: "white", margin: "0 0 0.35rem" }}>50+ devotionals available now</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>Scripture · Reflection · Prayer — organized by theme.</p>
            </div>
            <a href="https://devotional-discovery.lovable.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex", whiteSpace: "nowrap" }}>
              Open the App ↗
            </a>
          </div>
        </div>
      </section>

      {/* Pillar connections */}
      <section style={{ background: "#0f1e35", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
          {[
            { pillar: "Pillar II", title: "Surrender", desc: "Release what was never yours to carry.", href: "/journey#surrender" },
            { pillar: "Pillar III", title: "Identity", desc: "You are not your fear, your past, or your pain.", href: "/journey#identity" },
            { pillar: "Pillar V", title: "Renewal Under Pressure", desc: "God often works through perseverance.", href: "/journey#renewal" },
          ].map(p => (
            <Link key={p.href} href={p.href} style={{ background: "#1a2e4a", padding: "2rem 1.75rem", display: "block" }}>
              <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.5)", margin: "0 0 0.75rem" }}>{p.pillar}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "white", margin: "0 0 0.5rem" }}>{p.title}</h3>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/journey" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex" }}>
            Begin the Full Journey →
          </Link>
        </div>
      </section>
    </div>
  );
}
