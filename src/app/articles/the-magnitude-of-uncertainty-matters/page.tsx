import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Magnitude of Uncertainty Matters | Silence the Noise™",
  description: "Wisdom is not pretending all uncertainties are small. Wisdom is recognizing which uncertainties deserve your energy — and which are merely consuming it. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "The Magnitude of Uncertainty Matters | Dr. Samuel E. Wilson, MD",
    description: "Fear thrives in the undefined. Wisdom begins with definition.",
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
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "0.5rem 0.85rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c" }}>Part of the Uncertainty Series</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            The Magnitude of<br/>Uncertainty Matters
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            A delayed text message, a cancer diagnosis, a marriage under strain — the mind often assigns equal emotional weight to all three. It should not. Here is why the difference matters.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>9 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Anxiety · Wisdom · Faith · Waiting</span>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* ── DISCUSSION 1 ─────────────────────────────────── */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.25rem" }}>
            Part One: Why Perspective Changes Everything
          </h2>

          <p style={{ marginBottom: "1.75rem" }}>
            One of the reasons anxiety becomes so exhausting is that the mind often assigns equal emotional value to vastly different uncertainties. A delayed text message, a job interview, a cancer diagnosis, a marriage under strain, and the future of your children can all trigger the same mental machinery.
          </p>
          <p style={{ marginBottom: "1.75rem" }}>
            The body releases stress hormones. The mind begins searching for answers. The imagination starts filling in the blanks.
          </p>
          <p style={{ marginBottom: "2.5rem", fontWeight: 600, color: "#0f1e35" }}>
            The problem is not that uncertainty exists. The problem is that uncertainty without perspective becomes amplified.
          </p>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2rem 0 2.5rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "#c9a84c", lineHeight: 1.75, margin: "0 0 0.5rem" }}>A useful question:</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>
              &ldquo;What is the actual consequence if this uncertainty resolves in the worst reasonable way?&rdquo;
            </p>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            Notice I did not say the worst <em style={{ color: "#0f1e35" }}>imaginable</em> way. The human mind has an unlimited capacity for catastrophic imagination. It can create outcomes that have almost no relationship to reality. Instead, ask what is reasonably possible.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.85rem" }}>For many concerns</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#4a4040", lineHeight: 1.75, margin: 0 }}>A mistake can be corrected. A financial setback can be recovered from. A disagreement can be repaired. A delay can be tolerated.</p>
            </div>
            <div style={{ background: "white", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.85rem" }}>For some concerns</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#4a4040", lineHeight: 1.75, margin: 0 }}>A serious illness. The loss of a loved one. Major financial hardship. A threat to safety. These deserve real attention because their consequences are real.</p>
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2rem 0 1.75rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>A Mature Mind Learns to Ask</p>
            {["What is the probability?","What is the consequence?","What is the timeline?","What is within my influence?"].map((q, i) => (
              <div key={q} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.6rem 0", borderBottom: i < 3 ? "1px solid #f0ebe1" : "none" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginTop: "0.25rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>When we fail to measure magnitude, every problem becomes an emergency. When every problem becomes an emergency, the nervous system never rests. The result is chronic mental fatigue, poor decision-making, irritability, and often spiritual exhaustion.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", margin: "2rem 0 3rem" }}>
            <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.75rem", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", margin: "0 0 0.6rem" }}>FEAR</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.65 }}>Thrives in the undefined.</p>
            </div>
            <div style={{ background: "white", border: "1px solid #c9a84c", borderRadius: 2, padding: "1.75rem", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#c9a84c", margin: "0 0 0.6rem" }}>WISDOM</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#0f1e35", fontWeight: 600, margin: 0, lineHeight: 1.65 }}>Begins with definition.</p>
            </div>
          </div>

          {/* ── DISCUSSION 2 ─────────────────────────────────── */}
          <div style={{ height: 1, background: "#e4ddd2", margin: "2rem 0 3rem" }} />

          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.25rem" }}>
            Part Two: Responsibility vs. Control
          </h2>

          <p style={{ marginBottom: "1.75rem" }}>
            Many people suffer not because of uncertainty itself but because they attempt to control outcomes that were never theirs to control. There is a subtle but important distinction.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1rem" }}>You are responsible for</p>
              {["Your preparation.","Your effort.","Your integrity.","Your choices.","Your response."].map(r => (
                <p key={r} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "white", margin: "0 0 0.4rem", lineHeight: 1.6 }}>▸ {r}</p>
              ))}
            </div>
            <div style={{ background: "white", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 1rem" }}>You are not responsible for</p>
              {["Other people's decisions.","Future events.","The timing of outcomes.","The reactions of others.","Every variable in a complex situation."].map(r => (
                <p key={r} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: "0 0 0.4rem", lineHeight: 1.6 }}>{r}</p>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            {[
              { who: "A parent", can: "guide a child", cannot: "control every decision that child will make." },
              { who: "A physician", can: "provide excellent care", cannot: "guarantee every outcome." },
              { who: "A business owner", can: "make wise decisions", cannot: "control the economy." },
              { who: "A believer", can: "pray faithfully", cannot: "dictate God's timing." },
            ].map(row => (
              <div key={row.who} style={{ background: "white", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{row.who}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.95rem", color: "#4a4040", margin: "0 0 0.4rem", lineHeight: 1.6 }}><span style={{ color: "#c9a84c" }}>Can</span> {row.can}.</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#9a9189", margin: 0, lineHeight: 1.6 }}>Cannot {row.cannot}</p>
              </div>
            ))}
          </div>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0 2.5rem", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "#0f1e35", lineHeight: 1.8 }}>
            God never asked us to carry the universe. He asked us to be faithful today.
          </blockquote>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "2rem 0 3rem" }}>
            <div style={{ background: "#faf7f2", padding: "1.75rem" }}>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: "0 0 0.5rem", lineHeight: 1.65 }}>The person who confuses responsibility with control</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>will live in constant tension.</p>
            </div>
            <div style={{ background: "white", padding: "1.75rem" }}>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: "0 0 0.5rem", lineHeight: 1.65 }}>The person who understands the difference</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#c9a84c", margin: 0 }}>begins to experience peace.</p>
            </div>
          </div>

          {/* ── DISCUSSION 3 ─────────────────────────────────── */}
          <div style={{ height: 1, background: "#e4ddd2", margin: "2rem 0 3rem" }} />

          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.25rem" }}>
            Part Three: Faith During the Waiting
          </h2>

          <p style={{ marginBottom: "1.75rem" }}>Most people imagine peace arrives when uncertainty disappears. Yet life demonstrates the opposite.</p>
          <p style={{ marginBottom: "1.75rem", fontStyle: "italic", color: "#6b6256" }}>There is always another uncertainty waiting beyond the current one.</p>
          <p style={{ marginBottom: "2.5rem", fontWeight: 600, color: "#0f1e35" }}>If peace depends upon certainty, peace will remain temporary.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Faith is not</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>The absence of questions.</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>Faith is</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "white", margin: 0, lineHeight: 1.7 }}>The willingness to move forward despite unanswered questions.</p>
            </div>
          </div>

          {/* Faith before certainty */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "2rem 0 2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>Faith Before Certainty</p>
            {[
              ["The farmer", "plants before seeing the harvest."],
              ["The sailor", "leaves shore before seeing the destination."],
              ["The believer", "obeys before seeing the entire plan."],
            ].map(([who, did]) => (
              <div key={who} style={{ display: "flex", gap: "1.25rem", alignItems: "baseline", padding: "0.65rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.72rem", color: "#c9a84c", minWidth: "6rem" }}>{who}</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>{did}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            This is why uncertainty can become a powerful teacher. It reveals where our confidence truly resides. The waiting season often exposes hidden idols.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            {["The need to know.","The need to control.","The need for guarantees.","The need for immediate answers."].map(idol => (
              <div key={idol} style={{ background: "white", padding: "1.5rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{idol}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>Faith slowly loosens our grip on these things. Not because answers are unimportant. But because God&rsquo;s presence becomes more important than the answers.</p>

          {/* Steady heart */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "2.5rem 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1.5rem" }}>A Steady Heart Says</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 1rem" }}>
              &ldquo;I will gather the facts. I will make wise decisions. I will take the next faithful step. And where my knowledge ends, I will trust God.&rdquo;
            </p>
            <div style={{ width: 44, height: 1, background: "rgba(201,168,76,0.3)", margin: "1.25rem auto" }} />
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
              {["That is not denial.","That is courage.","That is peace that exists even while the questions remain unanswered."].map(l => (
                <p key={l} style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#c9a84c", margin: 0 }}>{l}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Series links */}
        <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.75rem 2rem", margin: "4rem 0 0" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>Uncertainty Series</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { href: "/articles/when-uncertainty-arrives-5-steps", label: "When Uncertainty Arrives: 5 Steps", desc: "The complete clinical framework for moving through uncertainty." },
              { href: "/articles/effort-trust-and-the-limits-of-control", label: "Effort, Trust, and the Limits of Control", desc: "When has effort fulfilled its assignment? Why worry changes the worrier, not the problem." },
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
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#surrender" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar II: Surrender</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#awareness", label: "Pillar I: Awareness", desc: "Recognize the noise before it controls you." },
              { href: "/journey#surrender", label: "Pillar II: Surrender", desc: "Release what was never yours to carry." },
              { href: "/articles/anxiety-is-a-signal-not-the-root", label: "Anxiety Is a Signal", desc: "Understanding what anxiety is protecting you from." },
              { href: "/devotionals/prayer-supplication-thanksgiving", label: "Prayer, Supplication & Thanksgiving", desc: "The peace that passes understanding." },
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
          That is not denial. That is courage. That is peace that exists even while the questions remain unanswered.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
