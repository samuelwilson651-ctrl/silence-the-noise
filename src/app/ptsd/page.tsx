import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PTSD & Trauma | Silence the Noise™",
  description: "Trauma is not a life sentence. Integration is possible. Physician-led content on PTSD, trauma, and the path from surviving to whole. Dr. Samuel E. Wilson, MD.",
};

const coming = ["The Memory That Refuses to Leave","Witnessing Human Suffering","Trauma and Identity","The Biology of Fear","The Path Back to Safety","PTSD Integration — Not Just Management"];

export default function PTSDPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🧩</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Topic Hub · Pillars III & VII</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>PTSD &amp; Trauma</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: "0 0 2rem" }}>
            Trauma is not a life sentence. It is a wound — neurological, spiritual, and relational — that responds to integrated care. These writings offer a path from surviving to truly returning home to yourself.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Key truths */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1px", background: "#e4ddd2", marginBottom: "4rem" }}>
            {[
              ["Trauma is not weakness","It is the nervous system's response to overwhelming experience. The body learned danger — and has not yet been shown it is safe."],
              ["Integration, not management","The goal is not to suppress symptoms forever. It is to process what happened, restore identity, and return to wholeness."],
              ["Healing is possible","The nervous system that learned fear can learn safety. The brain that built trauma pathways can build new ones."],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: "white", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Related content from other hubs */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Related Framework Content</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1rem", marginBottom: "4rem" }}>
            {[
              { href: "/articles/anxiety-is-a-signal-not-the-root", title: "Anxiety Is a Signal, Not the Root Cause", desc: "Understanding the 6-step anxiety cycle and how trauma drives it.", tag: "Article" },
              { href: "/articles/when-nothing-seems-to-work", title: "When Nothing Seems to Work", desc: "For the person who has tried everything and is still in the dark.", tag: "Article" },
              { href: "/journey#identity", title: "Pillar III: Identity", desc: "Separating yourself from your trauma. You are not what happened to you.", tag: "Framework" },
              { href: "/journey#integration", title: "Pillar VII: Integration", desc: "Mind, body, spirit, and relationships — no longer at war.", tag: "Framework" },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.75rem" }}>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "0.5rem" }}>{item.tag}</span>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.65, margin: "0 0 0.75rem" }}>{item.desc}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>Read →</span>
              </Link>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Articles Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1rem" }}>
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
          {[{ pillar:"Pillar III",title:"Identity",desc:"You are not what happened to you.",href:"/journey#identity" },{ pillar:"Pillar V",title:"Renewal Under Pressure",desc:"Storms reveal foundations — and can become places of growth.",href:"/journey#renewal" },{ pillar:"Pillar VII",title:"Integration",desc:"Mind, body, spirit, relationships — no longer at war.",href:"/journey#integration" }].map(p => (
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
