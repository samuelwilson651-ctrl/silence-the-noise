import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxiety | Silence the Noise™",
  description: "Fear of tomorrow, the cost of uncertainty, and the path to peace. Physician-led, faith-centered content on anxiety through the Silence the Noise™ framework.",
};

const articles = [
  { href: "/articles/anxiety-is-a-signal-not-the-root", title: "Anxiety Is Often a Signal, Not the Root Cause", desc: "The dashboard warning light is not the engine problem. Understanding what anxiety is protecting you from — and the 7-step path toward freedom.", pillar: "Pillar I · Pillar IV", tag: "Anchor" },
  { href: "/articles/when-uncertainty-arrives-5-steps", title: "When Uncertainty Arrives: 5 Steps to Keep It from Owning Your Mind", desc: "A clinical framework for moving through uncertainty without being consumed by it. Define it. Measure it. Act. Surrender. Find peace.", pillar: "Pillar I · Pillar II · Pillar IV", tag: "Framework" },
  { href: "/articles/the-magnitude-of-uncertainty-matters", title: "The Magnitude of Uncertainty Matters", desc: "Wisdom is recognizing which uncertainties deserve your energy and which are merely consuming it. Includes Part 2: Responsibility vs Control + Part 3: Faith During the Waiting.", pillar: "Pillar I · Pillar II", tag: "Teaching" },
  { href: "/articles/effort-trust-and-the-limits-of-control", title: "Effort, Trust, and the Limits of Control", desc: "When has effort fulfilled its assignment? Why more thinking often produces more exhaustion — and what trust actually looks like.", pillar: "Pillar II · Pillar IV", tag: "Teaching" },
  { href: "/articles/when-nothing-seems-to-work", title: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark. Healing is rarely linear — and slow progress is still progress.", pillar: "Pillar V", tag: "Featured" },
  { href: "/devotionals/prayer-supplication-thanksgiving", title: "Prayer, Supplication, and Thanksgiving", desc: "Philippians 4:6–7 — the three movements that interrupt anxiety and open the door to the peace that passes understanding.", pillar: "Pillar I · Pillar II", tag: "Devotional" },
];

const coming = ["The Noise of Tomorrow","The Wandering Mind","Bringing Heart and Mind into Accord","When the Noise Is Always About Me","The False Promise of Control","The Cost of Uncertainty"];

const tagColors: Record<string, { bg: string; color: string }> = {
  Anchor:     { bg: "#0f1e35", color: "#c9a84c" },
  Framework:  { bg: "#1a2e4a", color: "#c9a84c" },
  Teaching:   { bg: "#f0ebe1", color: "#6b6256" },
  Featured:   { bg: "#c9a84c", color: "#0f1e35" },
  Devotional: { bg: "#2a3e5a", color: "#c9a84c" },
};

export default function AnxietyPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🌀</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Topic Hub · Pillars I & II</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Anxiety</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Fear of tomorrow, the cost of uncertainty, and the path to peace. These writings explore anxiety through a physician&rsquo;s lens — addressing both the neuroscience and the scriptural truth that points the way forward.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Published — {articles.length} Pieces</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
            {articles.map(a => {
              const tc = tagColors[a.tag] ?? { bg: "#0f1e35", color: "#c9a84c" };
              const isDevotional = a.href.includes("/devotionals/");
              return (
                <Link key={a.href} href={a.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", top: -1, left: "2rem", background: tc.bg, color: tc.color, fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, padding: "0.2rem 0.65rem", borderRadius: "0 0 3px 3px" }}>{a.tag}</span>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.75rem 0" }}>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{a.pillar}</span>
                    {isDevotional && <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>✝ Devotional</span>}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.25rem,2.5vw,1.6rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem" }}>{a.title}</h2>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: "0 0 1rem" }}>{a.desc}</p>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Read →</span>
                </Link>
              );
            })}
          </div>

          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1rem" }}>
            {coming.map(title => (
              <div key={title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem", opacity: 0.65 }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189", margin: 0 }}>Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1e35", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
          {[
            { pillar: "Pillar I", title: "Awareness", desc: "Recognize the noise before it controls you.", href: "/journey#awareness" },
            { pillar: "Pillar II", title: "Surrender", desc: "Release what was never yours to carry.", href: "/journey#surrender" },
            { pillar: "Pillar IV", title: "Discipline", desc: "Small daily actions rewire the anxious mind.", href: "/journey#discipline" },
          ].map(p => (
            <Link key={p.href} href={p.href} style={{ background: "#1a2e4a", padding: "2rem 1.75rem", display: "block" }}>
              <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.5)", margin: "0 0 0.75rem" }}>{p.pillar}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "white", margin: "0 0 0.5rem" }}>{p.title}</h3>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/journey" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex" }}>Begin the Full Journey →</Link>
        </div>
      </section>
    </div>
  );
}
