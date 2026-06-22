import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seven Pillars | Silence the Noise™",
  description: "The seven pillars of the Silence the Noise™ framework — from Awareness to Integration. Dr. Samuel E. Wilson, MD.",
};

export default function PillarsPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The Silence the Noise™ Framework</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>The Seven Pillars</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>
            Seven principles — not a checklist, but a way of moving through the world. Each builds on the last and leads toward wholeness.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/framework" className="btn btn-gold">Full Framework Overview →</Link>
            <Link href="/journey" className="btn btn-outline-light">Begin the Journey</Link>
          </div>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: "1.5rem" }}>
            {[
              { num:"I",   id:"awareness",   title:"Awareness",             tagline:"Recognize the noise before it controls you.", color:"#c9a84c", href:"/framework#awareness" },
              { num:"II",  id:"surrender",   title:"Surrender",             tagline:"Release what was never yours to carry.", color:"#b8975e", href:"/framework#surrender" },
              { num:"III", id:"identity",    title:"Identity",              tagline:"You are not your diagnosis, your trauma, or your past.", color:"#a8885a", href:"/framework#identity" },
              { num:"IV",  id:"discipline",  title:"Discipline",            tagline:"Small daily actions create transformation.", color:"#988555", href:"/framework#discipline" },
              { num:"V",   id:"renewal",     title:"Renewal Under Pressure",tagline:"Storms reveal foundations — and become places of growth.", color:"#886a5a", href:"/framework#renewal" },
              { num:"VI",  id:"compassion",  title:"Compassion",            tagline:"Healing rarely happens in isolation.", color:"#785a5a", href:"/framework#compassion" },
              { num:"VII", id:"integration", title:"Integration",           tagline:"Mind, body, spirit, purpose, and relationships aligned.", color:"#684a4a", href:"/framework#integration" },
            ].map(p => (
              <Link key={p.id} href={p.href} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", border: `2px solid ${p.color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.85rem", color: p.color }}>{p.num}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.35rem" }}>Pillar {p.num}</p>
                  <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.25rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem" }}>{p.title}</h2>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: "0 0 0.75rem", lineHeight: 1.6 }}>{p.tagline}</p>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>Read Full Description →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
