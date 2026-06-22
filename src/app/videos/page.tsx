import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Series | Silence the Noise™",
  description: "Teaching video series by Dr. Samuel E. Wilson, MD — where Scripture meets neuroscience.",
};

const series = [
  { num:1, title:"Stress, the Body & the Word of God", episodes:4, desc:"How chronic stress affects the body, brain, and spirit — and what Scripture says about it. Includes the vagus nerve, cortisol, and the neurological basis of Philippians 4:6–7.", pillars:"Pillar IV", category:"Body · Faith · Neuroscience" },
  { num:2, title:"Renew Your Mind — Or Drift Without Knowing", episodes:3, desc:"Romans 12:2 examined through the lens of neuroplasticity. Why the mind renews or deteriorates based on what it repeatedly practices.", pillars:"Pillar I · Pillar IV", category:"Anxiety · Formation" },
  { num:3, title:"When They Won't Admit It (And Your Peace)", episodes:3, desc:"How to maintain internal peace when others are in denial, avoidance, or conflict. Compassion without enabling. Boundaries without bitterness.", pillars:"Pillar VI", category:"Purpose · Relationships" },
  { num:4, title:"The Physiology of Faith Under Stress", episodes:4, desc:"What happens in the body when we pray, worship, and trust God. The science of sacred practice and its measurable effects on the nervous system.", pillars:"Pillar II · Pillar V", category:"Faith · Neuroscience" },
  { num:5, title:"PTSD, Trauma & Healing Through the Four Pillars", episodes:5, desc:"A comprehensive teaching series on trauma recovery — spiritual, nutritional, physical, and psychological. Clinical and scriptural in equal measure.", pillars:"Pillar III · Pillar VII", category:"PTSD · Trauma · Integration" },
];

export default function VideosPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🎬</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Video Teaching</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Video Series</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Multi-part teaching series — each one going deeper into a specific dimension of the Silence the Noise™ framework. Scripture, science, and practical application.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Teaching Series</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(380px,1fr))", gap: "1.5rem" }}>
            {series.map(s => (
              <div key={s.num} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{s.pillars}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189" }}>{s.episodes} episodes</span>
                </div>
                <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(201,168,76,0.6)", margin: "0 0 0.5rem" }}>Series {String(s.num).padStart(2,"0")}</p>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem", lineHeight: 1.35 }}>{s.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", lineHeight: 1.75, margin: "0 0 1rem" }}>{s.desc}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#9a9189", margin: "0 0 0.75rem" }}>{s.category}</p>
                <div style={{ borderTop: "1px solid #e4ddd2", paddingTop: "0.85rem" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189" }}>Available to members →</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Full Video Library</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", fontWeight: 600, color: "white", margin: "0 0 0.35rem" }}>All 5 series available to members</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>New series added regularly.</p>
            </div>
            <Link href="/membership" className="btn btn-gold">Join to Watch →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
