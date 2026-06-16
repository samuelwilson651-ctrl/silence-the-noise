import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles | Silence the Noise™",
  description: "Physician-led, faith-centered articles on anxiety, depression, PTSD, purpose, and spiritual renewal. Dr. Samuel E. Wilson, MD.",
};

const articles = [
  { href: "/articles/valuing-the-lives-of-others", title: "Valuing the Lives of Others: Becoming an Instrument of Peace", desc: "To become an instrument of peace in another person's storm is to remind your own soul that God has not finished using you.", category: "Depression · Purpose · Faith", pillar: "Pillar VI: Compassion · Pillar VII: Integration", tag: "Cornerstone" },
  { href: "/articles/when-nothing-seems-to-work", title: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark. Healing is rarely linear — and slow progress is still progress.", category: "Depression · Anxiety", pillar: "Pillar V: Renewal", tag: "Featured" },
  { href: "/articles/the-power-of-i-dont-know", title: "The Power of \"I Don't Know\"", desc: "When the mind believes it already knows, exploration stops. Curiosity is movement of the mind. Faith is movement of the spirit.", category: "Purpose · Faith", pillar: "Pillar I: Awareness · Pillar III: Identity", tag: "Teaching" },
];

const coming = [
  { title: "The Noise of Tomorrow", category: "Anxiety" },
  { title: "The Cost of Uncertainty", category: "Anxiety" },
  { title: "Five Steps to Overcome Anxiety", category: "Anxiety" },
  { title: "The Wandering Mind", category: "Anxiety" },
  { title: "The False Promise of Control", category: "Anxiety" },
  { title: "The Cliff and the Gorge", category: "Depression" },
  { title: "Love as Medicine", category: "Depression" },
  { title: "The Memory That Refuses to Leave", category: "PTSD & Trauma" },
  { title: "The Biology of Fear", category: "PTSD & Trauma" },
  { title: "The Vagus Nerve & the Fruit of the Spirit", category: "Faith" },
  { title: "God Is Talking — Are You Listening?", category: "Faith" },
  { title: "The Gut-Brain-Spirit Connection", category: "Body" },
  { title: "Builder vs. Spectator", category: "Purpose" },
];

export default function ArticlesPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Article Library</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>All Articles</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 580, margin: 0 }}>
            Every article organized under the Silence the Noise™ framework — tagged by topic, pillar, and journey stage.
          </p>
        </div>
      </header>
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Published</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
            {articles.map(a => (
              <Link key={a.href} href={a.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem", position: "relative" }}>
                <span style={{ position: "absolute", top: -1, left: "2rem", background: a.tag === "Cornerstone" ? "#0f1e35" : a.tag === "Featured" ? "#c9a84c" : "#1a2e4a", color: a.tag === "Featured" ? "#0f1e35" : "#c9a84c", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, padding: "0.2rem 0.65rem", borderRadius: "0 0 3px 3px" }}>{a.tag}</span>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.75rem 0" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{a.pillar}</span>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{a.category}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.35rem,2.5vw,1.75rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem" }}>{a.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: "0 0 1rem" }}>{a.desc}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Read Article →</span>
              </Link>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1rem" }}>
            {coming.map(a => (
              <div key={a.title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem", opacity: 0.65 }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem" }}>{a.title}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189", margin: 0 }}>{a.category} · Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
