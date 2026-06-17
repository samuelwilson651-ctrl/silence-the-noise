import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Effort, Trust, and the Limits of Control | Silence the Noise™",
  description: "Many people are suffering not from a lack of effort but from effort applied beyond its intended purpose. When has effort fulfilled its assignment? Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Effort, Trust, and the Limits of Control | Dr. Samuel E. Wilson, MD",
    description: "Trust is not the absence of effort. Trust is what follows effort.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#surrender" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar II: Surrender</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌀 Anxiety</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🧭 Purpose</Link>
          </div>

          {/* Series badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "0.5rem 0.85rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c" }}>Part of the Uncertainty Series</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Effort, Trust, and the<br/>Limits of Control
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            Many people are suffering not from a lack of effort but from effort applied beyond its intended purpose. The question most people never ask: when has effort fulfilled its assignment?
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>7 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Anxiety · Purpose · Surrender · Trust</span>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* Opening lie */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "0 0 2.5rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>The Lie Uncertainty Whispers</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.2rem,2.2vw,1.5rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>
              &ldquo;If you think about it long enough, you can control it.&rdquo;
            </p>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            The mind begins running scenarios. It analyzes, predicts, rehearses conversations, imagines outcomes, reviews mistakes, and attempts to build a future that has not yet arrived. We call this preparation. Often it is not preparation at all.
          </p>
          <p style={{ marginBottom: "1.75rem", fontWeight: 600, color: "#0f1e35" }}>
            It is an attempt to replace uncertainty with control.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>The problem is that effort has limits.</p>

          {/* Three examples */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            {[
              { who: "The Farmer", can: "Prepare the soil, select the seed, tend the field.", cannot: "Command the rain." },
              { who: "The Physician", can: "Study, diagnose, and treat.", cannot: "Possess absolute authority over healing." },
              { who: "The Parent", can: "Teach, protect, and love.", cannot: "Control every decision their child will make." },
            ].map(row => (
              <div key={row.who} style={{ background: "white", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{row.who}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.98rem", color: "#4a4040", margin: "0 0 0.75rem", lineHeight: 1.65 }}><span style={{ color: "#c9a84c", fontWeight: 600 }}>Can:</span> {row.can}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#9a9189", margin: 0, lineHeight: 1.65 }}><span style={{ fontStyle: "normal" }}>Cannot:</span> {row.cannot}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2rem 0 2.5rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.35rem)", color: "#c9a84c", lineHeight: 1.75, margin: "0 0 0.4rem" }}>The question becomes:</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.35rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>When has effort fulfilled its assignment?</p>
          </div>

          {/* Productive vs emotional */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            Productive Effort vs. Emotional Labor
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>Productive Effort</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "white", margin: "0 0 0.5rem", lineHeight: 1.65 }}>Moves reality.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>Action that produces external change or gathers real information.</p>
            </div>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Emotional Labor</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#0f1e35", margin: "0 0 0.5rem", lineHeight: 1.65 }}>Often only moves thoughts.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>Mental rehearsing that produces exhaustion without producing progress.</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.25rem" }}>Before continuing to invest energy, consider these four questions:</p>
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "1.25rem 0 1.75rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>The Four Completion Questions</p>
            {[
              "Have I gathered the necessary information?",
              "Have I sought wise counsel?",
              "Have I taken the next practical step?",
              "Have I addressed what is within my authority?",
            ].map((q, i) => (
              <div key={q} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: i < 3 ? "1px solid #f0ebe1" : "none" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.65rem", color: "#c9a84c", minWidth: "1.5rem", marginTop: "0.15rem" }}>{i + 1}.</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>{q}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>If the answer to all four is yes, additional thinking may not produce additional benefit. The mind often refuses to stop anyway — because uncertainty creates discomfort, and discomfort seeks resolution. But the resolution it seeks through more thinking rarely arrives. What arrives instead is exhaustion.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            {[["The body","grows weary."],["The spirit","grows weary."],["The soul","grows weary."]].map(([s,e]) => (
              <div key={s} style={{ background: "white", padding: "1.5rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#9a9189", margin: "0 0 0.35rem" }}>{s}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{e}</p>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: "2.5rem", fontStyle: "italic", color: "#6b6256" }}>Yet nothing has actually changed.</p>

          {/* Effort must become trust */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            Effort Must Eventually Become Trust
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            They pray. They plan. They research. They prepare. Then they continue carrying the burden as though none of those things ever occurred.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>What trust is not</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>The absence of effort.</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>What trust is</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "white", margin: 0, lineHeight: 1.7 }}>What follows effort.</p>
            </div>
          </div>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "1.5rem 0 2.5rem", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8 }}>
            &ldquo;I have done what wisdom requires. The remainder belongs to God.&rdquo;
          </blockquote>

          {/* Biblical pattern */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "1.5rem 0 2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>The Biblical Pattern: Effort Before Certainty</p>
            {[
              { who: "Noah", did: "built before rain." },
              { who: "Abraham", did: "traveled before understanding." },
              { who: "Moses", did: "walked before seeing deliverance." },
              { who: "Peter", did: "stepped before knowing whether the water would hold him." },
            ].map(row => (
              <div key={row.who} style={{ display: "flex", gap: "1.25rem", alignItems: "baseline", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.8rem", color: "#c9a84c", minWidth: "5rem" }}>{row.who}</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.65 }}>{row.did}</p>
              </div>
            ))}
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.45)", margin: "1.5rem 0 0", lineHeight: 1.75 }}>
              Effort was required. But effort was never the source of the outcome.
            </p>
          </div>

          {/* Hidden fear */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Hidden Fear Beneath Overeffort
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>If we are honest, excessive effort is often rooted in fear.</p>

          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "1.5rem 0 2rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>What Fear Says About Stopping</p>
            {[
              "\"If I stop worrying, something bad will happen.\"",
              "\"If I stop thinking about it, I'll miss something.\"",
              "\"If I stop carrying this burden, nobody else will.\"",
            ].map(lie => (
              <div key={lie} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid #f0ebe1" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginTop: "0.25rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>{lie}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>Yet many people have discovered something remarkable. The problem remained exactly the same whether they worried about it for six hours or six minutes.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            {["Their sleep suffered.","Their relationships suffered.","Their joy suffered.","Their health suffered."].map(cost => (
              <div key={cost} style={{ background: "white", padding: "1.25rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{cost}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "2rem", fontStyle: "italic", color: "#6b6256" }}>The burden grew heavier while the situation remained unchanged.</p>

          {/* Christ's invitation */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(201,168,76,0.7)", margin: 0, lineHeight: 1.75 }}>
              Notice He does not say: &ldquo;Come unto me, and I will explain everything.&rdquo; He offers rest before He offers answers. Because rest is not found in certainty. Rest is found in relationship.
            </p>
          </div>

          {/* A better question */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            A Better Question
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>The common question</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#6b6256", margin: "0 0 0.5rem" }}>&ldquo;What else should I do?&rdquo;</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#9a9189", margin: 0, lineHeight: 1.6 }}>Seeks more effort. Assumes the answer lies in additional labor.</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>The better question</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#c9a84c", margin: "0 0 0.5rem" }}>&ldquo;Have I already done what is required?&rdquo;</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.6 }}>Seeks wisdom. Asks whether the labor is complete.</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>There comes a point in every difficult season where effort reaches its boundary. Beyond that boundary lies waiting. And waiting is where faith begins to reveal itself.</p>

          {/* Closing declaration */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "3rem 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1.5rem" }}>The Mature Soul Eventually Learns</p>
            {[
              "I will give my best effort.",
              "I will not demand perfect certainty.",
              "I will accept what is outside my authority.",
              "And I will trust God with what remains.",
            ].map((line, i) => (
              <p key={i} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: i === 3 ? "#c9a84c" : "rgba(255,255,255,0.85)", margin: "0 0 0.4rem", lineHeight: 1.75 }}>{line}</p>
            ))}
            <div style={{ width: 44, height: 1, background: "rgba(201,168,76,0.3)", margin: "1.5rem auto 1.5rem" }} />
            <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.78rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", margin: 0 }}>That is not weakness. That is properly ordered strength.</p>
          </div>

        </div>

        {/* Series links */}
        <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.75rem 2rem", margin: "4rem 0 0" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>Uncertainty Series</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { href: "/articles/when-uncertainty-arrives-5-steps", label: "When Uncertainty Arrives: 5 Steps", desc: "The complete clinical framework for moving through uncertainty." },
              { href: "/articles/the-magnitude-of-uncertainty-matters", label: "The Magnitude of Uncertainty Matters", desc: "Why not every uncertainty deserves equal energy." },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#faf7f2", borderRadius: 2 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.25rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0 }}>{item.desc}</p>
                </div>
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#surrender" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar II: Surrender</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#surrender", label: "Pillar II: Surrender", desc: "Release what was never yours to carry." },
              { href: "/articles/anxiety-is-a-signal-not-the-root", label: "Anxiety Is a Signal", desc: "Understanding what anxiety is trying to protect you from." },
              { href: "/devotionals/prayer-supplication-thanksgiving", label: "Prayer, Supplication & Thanksgiving", desc: "The peace that passes understanding." },
              { href: "/journey", label: "The Full Journey", desc: "Seven steps toward wholeness." },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Author */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0f1e35", border: "1px solid rgba(201,168,76,0.3)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.8rem", color: "#c9a84c" }}>SEW</span>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.72rem", letterSpacing: "0.14em", color: "#0f1e35", margin: "0 0 0.2rem" }}>SAMUEL E. WILSON, MD</p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "#c9a84c", margin: "0 0 0.6rem", letterSpacing: "0.08em" }}>Physician · Author · Speaker</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: 0 }}>Dr. Wilson is a physician, educator, and faith-centered voice committed to helping people restore clarity, purpose, and hope through the Silence the Noise™ framework.</p>
          </div>
        </div>
      </article>

      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>
          That is not weakness. That is properly ordered strength.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
