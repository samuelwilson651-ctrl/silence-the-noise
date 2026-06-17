import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When Uncertainty Arrives: 5 Steps to Keep It from Owning Your Mind | Silence the Noise™",
  description: "Not all uncertainty carries the same weight. A physician's five-step clinical framework for moving through uncertainty without being consumed by it. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "When Uncertainty Arrives: 5 Steps | Dr. Samuel E. Wilson, MD",
    description: "Peace does not come from knowing everything. It comes from knowing what is yours to carry — and what belongs to God.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    num: "01",
    title: "Define the Uncertainty",
    question: "What exactly am I uncertain about?",
    body: "The mind often creates a cloud when the actual issue is a single point. A named uncertainty is easier to address than a vague fear. Clarity is the first act of courage.",
    examples: ["Is it health?","Relationships?","Finances?","Faith?","Safety?","Future plans?"],
    note: "Write it down in one sentence. Name the specific thing, not the entire storm surrounding it.",
  },
  {
    num: "02",
    title: "Measure the Magnitude",
    question: "If the worst reasonable outcome occurred, what would the actual impact be?",
    body: "The mind often treats every uncertainty as life-altering. Most are not. Honest measurement does not minimize real pain — it prevents small problems from borrowing the weight of large ones.",
    scale: [
      { range: "1–3", label: "Inconvenience", desc: "Unpleasant, manageable, recoverable." },
      { range: "4–6", label: "Significant Challenge", desc: "Requires real effort and attention." },
      { range: "7–10", label: "Life-Altering Event", desc: "Deserves full care, counsel, and support." },
    ],
    note: "Many anxieties shrink when honestly measured. Some remain large — and that is okay. The goal is not denial. The goal is clarity.",
  },
  {
    num: "03",
    title: "Separate Facts from Predictions",
    question: "What do I actually know — and what am I imagining?",
    body: "The mind often confuses what is true with what it fears might become true. Fear grows in assumptions. Wisdom grows in facts.",
    table: [
      { col: "Known Facts", sub: "What evidence exists?", color: "white" },
      { col: "Unknown Assumptions", sub: "What am I imagining?", color: "#faf7f2" },
    ],
    note: "Write both columns. The exercise alone often reduces the weight significantly.",
  },
  {
    num: "04",
    title: "Build the Next Right Step",
    question: "What can I do in the next 24 hours?",
    body: "Uncertainty rarely requires a complete solution. It usually requires the next faithful step. Action weakens anxiety because action restores participation — it moves you from victim to agent.",
    actions: ["Make the phone call.","Schedule the appointment.","Gather information.","Seek counsel.","Pray.","Rest."],
    note: "One next step. Not the whole plan. Just the next step.",
  },
  {
    num: "05",
    title: "Release What Remains",
    question: "Have I mistaken responsibility for control?",
    body: "After facts are gathered and action is taken, there is often a remainder that cannot be controlled. This is not failure. This is the boundary of human authority — and the beginning of faith.",
    truths: [
      { yours: "Your decisions.", notYours: "Every outcome." },
      { yours: "Your effort.", notYours: "Other people's responses." },
      { yours: "Your faithfulness.", notYours: "God's timing." },
    ],
    note: "Trust does not mean passivity. It means doing everything wisdom requires and releasing the rest.",
  },
];

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#surrender" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar II: Surrender</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            When Uncertainty Arrives:<br/>5 Steps to Keep It from Owning Your Mind
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            Not all uncertainty carries the same weight. A biopsy result is not the same as a delayed text. One of the greatest mistakes the mind makes is treating every uncertainty as if it carries equal consequence.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>7 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Clinical Framework · Anxiety · Uncertainty</span>
          </div>
        </div>
      </header>

      {/* ── STEP NAVIGATOR ─────────────────────────────────── */}
      <div style={{ background: "#1a2e4a", padding: "1rem 2rem", overflowX: "auto" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginRight: "0.5rem", whiteSpace: "nowrap" }}>Jump to:</span>
          {steps.map(s => (
            <a key={s.num} href={`#step-${s.num}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", padding: "0.3rem 0.75rem", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, whiteSpace: "nowrap" }}>
              {s.num}. {s.title.split(" ")[0]} {s.title.split(" ")[1]}
            </a>
          ))}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* Intro */}
          <p style={{ marginBottom: "1.75rem" }}>
            The uncertainty of tomorrow&rsquo;s weather is not the same as the uncertainty of a biopsy result, a financial crisis, or the future of someone you love. Yet the mind often applies the same level of alarm to all three.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            What follows is a five-step clinical framework for moving through uncertainty without being consumed by it. Each step is both a cognitive exercise and a spiritual practice. They work together.
          </p>

          {/* Steps */}
          {steps.map((step, idx) => (
            <div key={step.num} id={`step-${step.num}`} style={{ marginBottom: "4rem", scrollMarginTop: "80px" }}>

              {/* Step header */}
              <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "0", marginBottom: "2rem" }}>
                <div style={{ background: "#0f1e35", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem 0" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1.1rem", color: "#c9a84c", letterSpacing: "0.05em" }}>{step.num}</span>
                </div>
                <div style={{ background: "#1a2e4a", padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.62rem", letterSpacing: "0.18em", color: "rgba(201,168,76,0.6)", margin: "0 0 0.35rem", textTransform: "uppercase" }}>Step {idx + 1} of 5</p>
                  <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.35rem,2.5vw,1.75rem)", fontWeight: 600, color: "white", margin: 0 }}>{step.title}</h2>
                </div>
              </div>

              {/* Question */}
              <div style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.35rem" }}>Ask yourself</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "#0f1e35", margin: 0, lineHeight: 1.7 }}>&ldquo;{step.question}&rdquo;</p>
              </div>

              <p style={{ marginBottom: "1.5rem" }}>{step.body}</p>

              {/* Step-specific content */}
              {step.examples && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0" }}>
                  {step.examples.map(e => (
                    <div key={e} style={{ background: "white", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ color: "#c9a84c", fontSize: "0.65rem" }}>▸</span>
                      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#0f1e35", margin: 0 }}>{e}</p>
                    </div>
                  ))}
                </div>
              )}

              {step.scale && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0" }}>
                  {step.scale.map((s, i) => (
                    <div key={s.range} style={{ background: i === 0 ? "white" : i === 1 ? "#faf7f2" : "#f0ebe1", padding: "1.5rem" }}>
                      <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1.1rem", color: "#c9a84c", margin: "0 0 0.35rem" }}>{s.range}</p>
                      <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem", letterSpacing: "0.05em" }}>{s.label}</p>
                      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {step.table && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0" }}>
                  {step.table.map(col => (
                    <div key={col.col} style={{ background: col.color, padding: "1.75rem" }}>
                      <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{col.col}</p>
                      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: "0 0 1.25rem", lineHeight: 1.65 }}>{col.sub}</p>
                      <div style={{ height: 60, borderBottom: "1px solid #e4ddd2", marginBottom: "0.5rem" }} />
                      <div style={{ height: 60, borderBottom: "1px solid #e4ddd2", marginBottom: "0.5rem" }} />
                      <div style={{ height: 60 }} />
                    </div>
                  ))}
                </div>
              )}

              {step.actions && (
                <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2rem", margin: "1.5rem 0" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>Possible Next Steps</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "0.5rem" }}>
                    {step.actions.map(a => (
                      <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <span style={{ color: "#c9a84c", fontSize: "0.6rem" }}>▸</span>
                        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.truths && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0" }}>
                  <div style={{ background: "#0f1e35", padding: "1.25rem 1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>You are responsible for</p>
                    {step.truths.map(t => (
                      <p key={t.yours} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "rgba(255,255,255,0.85)", margin: "0 0 0.4rem" }}>▸ {t.yours}</p>
                    ))}
                  </div>
                  <div style={{ background: "white", padding: "1.25rem 1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>You were never given authority over</p>
                    {step.truths.map(t => (
                      <p key={t.notYours} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: "0 0 0.4rem" }}>{t.notYours}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              <div style={{ background: "#faf7f2", borderLeft: "2px solid rgba(201,168,76,0.4)", paddingLeft: "1.25rem", margin: "1.25rem 0 0" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>{step.note}</p>
              </div>

              {/* Connector */}
              {idx < steps.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.5rem 0 0" }}>
                  <div style={{ flex: 1, height: 1, background: "#e4ddd2" }} />
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.65rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.1em" }}>↓</span>
                  <div style={{ flex: 1, height: 1, background: "#e4ddd2" }} />
                </div>
              )}
            </div>
          ))}

          {/* Formula */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "2rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1.25rem" }}>The Formula</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
              {["Uncertainty","Assessment","Action","Surrender","Peace"].map((w, i, a) => (
                <div key={w} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.9rem", color: w === "Peace" ? "#c9a84c" : "white", letterSpacing: "0.05em" }}>{w}</span>
                  {i < a.length - 1 && <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "0.85rem" }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Scripture */}
          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "3rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8 }}>
            &ldquo;Trust in the Lord with all thine heart; and lean not unto thine own understanding.&rdquo; — Proverbs 3:5
          </blockquote>

          {/* Closing contrast */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>The Anxious Mind</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontStyle: "italic", color: "#6b6256", margin: "0 0 1rem", lineHeight: 1.7 }}>Seeks certainty.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontStyle: "italic", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>Asks: &ldquo;What will happen?&rdquo;</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>The Mature Soul</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "white", margin: "0 0 1rem", lineHeight: 1.7 }}>Seeks faithfulness.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#c9a84c", fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>Asks: &ldquo;How should I live while I wait?&rdquo;</p>
            </div>
          </div>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: 0 }}>
              Peace does not come from knowing everything. Peace comes from knowing what is yours to carry — and what belongs to God.
            </p>
          </div>
        </div>

        {/* Companion series */}
        <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.75rem 2rem", margin: "4rem 0 0" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>Companion Articles in This Series</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { href: "/articles/the-magnitude-of-uncertainty-matters", label: "The Magnitude of Uncertainty Matters", desc: "Why not every uncertainty deserves equal energy — and the three questions that reveal the difference." },
              { href: "/articles/effort-trust-and-the-limits-of-control", label: "Effort, Trust, and the Limits of Control", desc: "When has effort fulfilled its assignment? Why more thinking often produces more exhaustion, not more certainty." },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#faf7f2", borderRadius: 2 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.25rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Framework badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar I: Awareness</Link>
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
              { href: "/articles/anxiety-is-a-signal-not-the-root", label: "Anxiety Is a Signal, Not the Root", desc: "The dashboard warning light is not the engine problem." },
              { href: "/journey#surrender", label: "Pillar II: Surrender", desc: "Release what was never yours to carry." },
              { href: "/articles/when-nothing-seems-to-work", label: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark." },
              { href: "/devotionals/prayer-supplication-thanksgiving", label: "Prayer, Supplication & Thanksgiving", desc: "Philippians 4:6–7 — the peace that passes understanding." },
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
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: 0 }}>
              Dr. Wilson is a physician, educator, and faith-centered voice committed to helping people restore clarity, purpose, and hope through the Silence the Noise™ framework.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>
          Peace does not come from knowing everything. It comes from knowing what is yours to carry.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
