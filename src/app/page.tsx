import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silence the Noise™ | Dr. Samuel E. Wilson, MD",
  description: "A physician-led, faith-centered framework for anxiety, depression, PTSD, purpose, and spiritual renewal.",
};

const S: Record<string, React.CSSProperties> = {
  navy:    { background: "#0f1e35" },
  cream:   { background: "#faf7f2" },
  white:   { background: "#ffffff" },
  gold:    { background: "#c9a84c" },
};

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ ...S.navy, minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "7rem 2rem 5rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[500,800,1100].map((s,i) => <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(201,168,76,${0.06-i*0.015})` }} />)}
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.055) 0%,transparent 70%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820 }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.75rem" }}>Dr. Samuel E. Wilson, MD · Physician · Author · Speaker</p>
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", margin: "0 auto 1.75rem" }} />
          <h1 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(3.5rem,10vw,8rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", lineHeight: 0.95, margin: 0 }}>
            Silence the Noise<sup style={{ fontSize: "0.28em", verticalAlign: "super", color: "#c9a84c" }}>™</sup>
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1rem,2.2vw,1.4rem)", color: "rgba(255,255,255,0.55)", margin: "1.5rem auto 0", maxWidth: 520 }}>
            A Physician&apos;s Framework for Anxiety, Depression, Purpose, and Faith
          </p>
          <div style={{ width: 1, height: 64, background: "linear-gradient(to bottom,transparent,rgba(201,168,76,0.5),transparent)", margin: "2.5rem auto" }} />
          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.1rem,1.9vw,1.45rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.85, fontWeight: 300 }}>
            <p style={{ margin: 0 }}><em style={{ color: "#e3c87a" }}>The noise is not your identity.</em></p>
            <p style={{ margin: "1.1rem 0 0" }}>Anxiety, depression, PTSD, fear, and spiritual exhaustion are often treated as separate problems. But many share one deeper reality: <em style={{ color: "#e3c87a" }}>the noise has become louder than the truth.</em></p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", justifyContent: "center", marginTop: "3rem" }}>
            <Link href="/journey" className="btn btn-gold">Start the Journey</Link>
            <Link href="/framework" className="btn btn-outline-light">Explore the Framework</Link>
            <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", alignItems: "center", marginTop: "4rem", flexWrap: "wrap" }}>
            {[["7","Pillars"],["50+","Devotionals"],["20+","Teachings"],["1","Framework"]].map(([n,l],i,a) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1.5rem", color: "#c9a84c", letterSpacing: "0.05em" }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{l}</div>
                </div>
                {i < a.length-1 && <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAND */}
      <div style={{ ...S.gold, padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {["One System","One Journey","One Framework","One Message"].map((t,i,a) => (
          <span key={t} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f1e35", fontWeight: 600 }}>{t}</span>
            {i < a.length-1 && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(15,30,53,0.3)", display: "inline-block" }} />}
          </span>
        ))}
      </div>

      {/* PILLARS */}
      <section style={{ ...S.navy, padding: "7rem 2rem" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="label-text" style={{ color: "#c9a84c", textAlign: "center" }}>The Seven Pillars</p>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "white", margin: 0 }}>The Silence the Noise™ Framework</h2>
            <div className="gold-rule gold-rule-center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 1, background: "rgba(201,168,76,0.1)" }}>
            {([["I","Awareness","Recognize the noise before it controls you.","/journey#awareness"],["II","Surrender","Release what was never yours to carry.","/journey#surrender"],["III","Identity","You are not your diagnosis, your trauma, or your past.","/journey#identity"],["IV","Discipline","Small daily actions create transformation.","/journey#discipline"],["V","Renewal Under Pressure","Storms reveal foundations — and become places of growth.","/journey#renewal"],["VI","Compassion","Healing rarely happens in isolation.","/journey#compassion"],["VII","Integration","Mind, body, spirit, purpose, and relationships aligned.","/journey#integration"]] as [string,string,string,string][]).map(([num,title,desc,href]) => (
              <Link key={num} href={href} style={{ background: "#1a2e4a", padding: "2.25rem 1.5rem", display: "block" }}>
                <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.5)", margin: "0 0 1rem" }}>PILLAR {num}</p>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "white", margin: "0 0 0.6rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOPIC HUBS */}
      <section style={{ ...S.cream, padding: "7rem 2rem" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="label-text" style={{ textAlign: "center" }}>The Framework in Action</p>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", margin: 0 }}>Explore Every Dimension of Healing</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5px", background: "#e4ddd2" }}>
            {([["🌀","Pillars I & II","Anxiety","Fear of tomorrow, the cost of uncertainty, and the path to peace.","/anxiety"],["🌧","Pillars II & VI","Depression","When the soul grows tired — and the path back to hope.","/depression"],["🧩","Pillars III & VII","PTSD & Trauma","Trauma is not a life sentence. Integration is possible.","/ptsd"],["✝","Pillars II & III","Faith & Spiritual Renewal","Hearing the gentle whisper when the world is shouting.","/faith"],["🌿","Pillar IV","Body, Nutrition & Healing","Stewardship of the whole person — body, brain, and spirit.","/body"],["🧭","Pillar VII","Purpose","From survival mode into the life you were created to live.","/purpose"]] as [string,string,string,string,string][]).map(([icon,cat,title,desc,href]) => (
              <Link key={href} href={href} style={{ background: "white", padding: "2.5rem 2.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>{icon}</span>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c" }}>{cat}</span>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.5rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#6b6256", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0f1e35", fontWeight: 500, marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid #e4ddd2" }}>
                  Explore {title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...S.white, padding: "7rem 2rem" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p className="label-text" style={{ textAlign: "center" }}>Dr. Samuel E. Wilson, MD</p>
          <blockquote style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,3vw,2.25rem)", fontStyle: "italic", color: "#0f1e35", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
            &ldquo;My life&apos;s work has taught me that many people do not simply need more information. They need less noise.&rdquo;
          </blockquote>
          <div className="gold-rule gold-rule-center" />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.85, fontStyle: "italic" }}>
            Physician · Educator · Inventor · Speaker · Faith-centered voice committed to helping people restore clarity, purpose, and hope.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/about" className="btn btn-gold">About Dr. Wilson →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ ...S.navy, textAlign: "center", padding: "9rem 2rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: 0 }}>
            Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "1rem 0 3rem" }}>One system. One journey. One framework. One message.</p>
          <Link href="/journey" className="btn btn-gold" style={{ fontSize: "0.82rem", padding: "1rem 2.5rem" }}>Start the Journey →</Link>
        </div>
      </section>
    </div>
  );
}
