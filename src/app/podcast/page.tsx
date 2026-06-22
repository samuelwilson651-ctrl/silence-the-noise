import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast | Silence the Noise™",
  description: "The Whole Person Podcast — where Scripture meets neuroscience. Dr. Samuel E. Wilson, MD.",
};

const episodes = [
  { num:1, title:"The Vagus Nerve: God's Built-In Anxiety Reset", desc:"The primary biological pathway through which the body receives peace — and how it maps to the Fruit of the Spirit in Galatians 5.", duration:"38 min", pillars:"Pillar I · Pillar IV", category:"Faith · Neuroscience" },
  { num:2, title:"The \"Must\" That Breaks Us: Anxiety as Misinterpretation", desc:"Anxiety is a future 'must' not being met. Depression is a past 'must' judged as failure. Healing begins when you question the must.", duration:"42 min", pillars:"Pillar I · Pillar III", category:"Anxiety" },
  { num:3, title:"The Fruit of the Spirit Is a Neurological Protocol", desc:"Galatians 5 is not just theology. It is a description of a regulated nervous system. Practicing the Fruit of the Spirit rewires the brain.", duration:"35 min", pillars:"Pillar IV", category:"Faith · Neuroscience" },
  { num:4, title:"Renewal Is Not an Event. It Is a Rhythm.", desc:"The brain strengthens what you repeat. Transformation does not come from intensity — it comes from consistency. Romans 12:2 explained.", duration:"40 min", pillars:"Pillar IV · Pillar V", category:"Depression · Formation" },
  { num:5, title:"PTSD Integration: Beyond Symptom Management", desc:"The goal is not to suppress symptoms forever. It is to process what happened, restore identity, and return to wholeness.", duration:"45 min", pillars:"Pillar III · Pillar VII", category:"PTSD · Trauma" },
];

export default function PodcastPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🎙</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Audio Teaching</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>The Whole Person Podcast</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Where Scripture meets neuroscience. Each episode draws clinical insight and scriptural truth together around one theme — practical, physician-led, faith-centered.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Episodes — Season 1</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", marginBottom: "4rem" }}>
            {episodes.map(ep => (
              <div key={ep.num} style={{ background: "white", padding: "2rem", display: "grid", gridTemplateColumns: "64px 1fr", gap: "1.5rem", alignItems: "start" }}>
                <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1rem 0", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", margin: "0 0 0.2rem" }}>EP</p>
                  <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1.1rem", color: "#c9a84c", margin: 0 }}>{ep.num}</p>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{ep.pillars}</span>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{ep.category}</span>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189", padding: "0.2rem 0.6rem" }}>{ep.duration}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem", lineHeight: 1.35 }}>{ep.title}</h2>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", lineHeight: 1.7, margin: "0 0 0.85rem" }}>{ep.desc}</p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189" }}>Available on major platforms</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.75rem" }}>Never Miss an Episode</p>
            <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.5rem", fontWeight: 600, color: "white", margin: "0 0 0.5rem" }}>Subscribe for free</h3>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1.75rem", lineHeight: 1.75 }}>New episodes and weekly reflections delivered to your inbox.</p>
            <Link href="/subscribe" className="btn btn-gold">Subscribe →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
