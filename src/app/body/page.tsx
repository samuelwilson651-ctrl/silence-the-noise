import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Body, Nutrition & Healing | Silence the Noise™",
  description: "What we eat, how we sleep, and how we move shapes the brain and affects the soul. Stewardship of the whole person. Dr. Samuel E. Wilson, MD.",
};

const principles = [
  { icon:"🧠", title:"The Gut-Brain Connection", desc:"The enteric nervous system contains over 100 million neurons. What you eat directly affects neurotransmitter production, inflammation, and mood. The gut is not separate from mental health." },
  { icon:"💨", title:"The Vagus Nerve", desc:"Breath, movement, and connection all activate vagal tone — the body's built-in pathway to calm. A slow exhale of 6–8 seconds signals safety to the nervous system." },
  { icon:"🌿", title:"Inflammation & Emotion", desc:"Chronic inflammation has been linked to depression, anxiety, and cognitive decline. An anti-inflammatory diet is not just physical stewardship — it is mental and spiritual stewardship." },
  { icon:"😴", title:"Sleep Architecture", desc:"Sleep is when the brain consolidates memory, regulates emotion, and clears metabolic waste. Consistent sleep and wake times are among the most powerful neurological interventions available." },
  { icon:"🏃", title:"Movement as Medicine", desc:"Physical movement elevates BDNF (brain-derived neurotrophic factor), reduces cortisol, and creates the neurological conditions for renewal. Romans 12:2 has a biological mechanism." },
  { icon:"🥦", title:"Nutritional Foundations", desc:"Omega-3 fatty acids, B vitamins, magnesium, and leafy greens all support brain function, mood regulation, and recovery. Food is information for the body." },
];

const coming = ["Food and the Brain","Inflammation and Emotion","The Body-Mind Connection","Stewardship of Health","Leafy Greens and Healing","Sleep, Movement, and Mental Clarity","The Vagus Nerve & the Fruit of the Spirit","The Gut-Brain-Spirit Connection"];

export default function BodyPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🌿</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Topic Hub · Pillar IV</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Body, Nutrition &amp; Healing</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            The body is not separate from the spirit. What we eat, how we sleep, and how we move shapes the brain and affects the soul. True healing requires stewardship of the whole person — not just the mind.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Do you not know that your bodies are temples of the Holy Spirit? Therefore honor God with your bodies.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: 0 }}>1 Corinthians 6:19–20</p>
          </div>

          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Core Principles</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            {principles.map(p => (
              <div key={p.title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }}>{p.icon}</span>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Articles Coming Soon</p>
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

      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>Healing the whole person — body, mind, spirit, and relationships.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey#discipline" className="btn btn-gold">Pillar IV: Discipline →</Link>
          <Link href="/framework" className="btn btn-outline-light">Full Framework</Link>
        </div>
      </section>
    </div>
  );
}
