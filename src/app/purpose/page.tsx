import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purpose | Silence the Noise™",
  description: "From survival mode into the life you were created to live. Physician-led content on meaning, calling, and living with intention.",
};

const articles = [
  { href: "/articles/the-power-of-i-dont-know", title: "The Power of \"I Don't Know\"", desc: "When the mind believes it already knows, exploration stops. Curiosity is movement of the mind. Faith is movement of the spirit. Both begin with the humility to admit incomplete understanding.", pillar: "Pillar I: Awareness · Pillar III: Identity", tag: "Teaching" },
];

const coming = ["Why Am I Here?","Meaning Versus Success","Purpose Beyond Circumstance","Living Beyond Survival","The Life You Were Created to Live","The Heart as Interpreter of Reality","Builder vs. Spectator"];

export default function PurposePage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2rem" }}>🧭</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Topic Hub · Pillar VII</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Purpose</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Purpose is not found after healing — it is part of the healing itself. These writings help people move from survival mode into the life they were created to live.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Published Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
            {articles.map(a => (
              <Link key={a.href} href={a.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{a.tag}</span>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{a.pillar}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.35rem,2.5vw,1.75rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem" }}>{a.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: "0 0 1rem" }}>{a.desc}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Read Article →</span>
              </Link>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "1rem" }}>
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
            { pillar: "Pillar III", title: "Identity", desc: "You are not your diagnosis, your trauma, or your past.", href: "/journey#identity" },
            { pillar: "Pillar VII", title: "Integration", desc: "Mind, body, spirit, purpose, and relationships aligned.", href: "/journey#integration" },
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
