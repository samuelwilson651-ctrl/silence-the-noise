import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helping Others Interrupts Depression's Loop | Silence the Noise™",
  description: "Helping others does not magically cure depression. But it can interrupt the loop. The neuroscience and spiritual principle behind why service heals the servant. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Helping Others Interrupts Depression's Loop | Dr. Samuel E. Wilson, MD",
    description: "A soul cannot heal by only staring at its own wound. At some point, the wounded soul must touch another wound with tenderness.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#compassion" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar VI: Compassion</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🧭 Purpose</Link>
          </div>

          {/* Companion badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2, padding: "0.5rem 0.85rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c" }}>Companion to</span>
            <Link href="/articles/valuing-the-lives-of-others" style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "rgba(255,255,255,0.75)" }}>Valuing the Lives of Others →</Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Helping Others Interrupts<br/>Depression&rsquo;s Loop
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            Helping others does not magically cure depression. But it can interrupt the loop. Here is why — spiritually and biologically.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>8 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Depression · Neuroscience · Compassion · Purpose</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* Opening */}
          <p style={{ fontSize: "clamp(1.1rem,1.9vw,1.3rem)", fontStyle: "italic", color: "#0f1e35", marginBottom: "1.75rem", lineHeight: 1.8 }}>
            When I value the life of another person, I am pulled out of the prison of self-absorption.
          </p>
          <p style={{ marginBottom: "1.75rem" }}>
            Depression often turns the mind inward — my pain, my failure, my loss, my fatigue, my meaninglessness. The mind circles. The soul contracts. The world narrows to the size of the wound.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            But when I become an instrument of peace in someone else&rsquo;s storm, the mind is invited to form a new pathway: <em style={{ color: "#0f1e35", fontStyle: "italic" }}>I still have purpose. I still carry light. I still have something God can use.</em>
          </p>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: 0 }}>
              That is both spiritual and biological.
            </p>
          </div>

          {/* The research */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            What the Research Shows
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Research on prosocial behavior — helping, volunteering, kindness, supporting others — has repeatedly found associations with better well-being, less loneliness, and lower depressive symptoms. The American Psychological Association has summarized that volunteering and kind acts often help &ldquo;the helper&rdquo; too. Mayo Clinic and other clinical sources emphasize that social connection, purposeful activity, and avoiding isolation matter significantly in depression recovery.
          </p>

          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "1.5rem 0 2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>The Careful Framing</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2" }}>
              <div style={{ background: "#f5f0e8", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.5rem" }}>What it does not do</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>Helping others does not magically cure depression.</p>
              </div>
              <div style={{ background: "white", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>What it can do</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: 0, lineHeight: 1.7 }}>Helping others can interrupt depression&rsquo;s loop.</p>
              </div>
            </div>
          </div>

          {/* Depression says / answers */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            Interrupting the Loop
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Depression speaks in certainties. It does not offer possibilities — it announces conclusions. But each act of service introduces a counter-voice. A different data point. A lived contradiction to the lie.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2.5rem" }}>
            {[
              { lie: "You are empty.", voice: "Service", truth: "Something meaningful still flows through you." },
              { lie: "You are alone.", voice: "Compassion", truth: "I am connected to another living soul." },
              { lie: "Nothing I do matters.", voice: "Instrument of Peace", truth: "My presence changed the atmosphere, even if only for a moment." },
            ].map(row => (
              <div key={row.lie} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2" }}>
                <div style={{ background: "#f5f0e8", padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.4rem" }}>Depression says</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>&ldquo;{row.lie}&rdquo;</p>
                </div>
                <div style={{ background: "white", padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.4rem" }}>{row.voice} answers</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>&ldquo;{row.truth}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Neuroplasticity */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Neuroscience Behind It
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Neuroplasticity is the brain&rsquo;s ability to change through repeated thought, behavior, emotion, and experience. When a person repeatedly practices kindness, purposeful action, gratitude, prayer, movement, and connection — the brain is not merely &ldquo;thinking differently.&rdquo;
          </p>
          <p style={{ marginBottom: "1.75rem", fontWeight: 600, color: "#0f1e35" }}>
            It is rehearsing a different life-pattern.
          </p>

          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "1.5rem 0 2rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>Practices That Build New Pathways</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
              {["Kindness","Purposeful action","Gratitude","Prayer","Movement","Connection"].map(p => (
                <div key={p} style={{ padding: "1.25rem", background: "rgba(255,255,255,0.03)" }}>
                  <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginRight: "0.5rem" }}>▸</span>
                  <span style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>{p}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "1.5rem 0 0" }}>
              There is scientific interest in depression as a disorder involving impaired or maladaptive plasticity. Many effective treatments may work partly by helping the brain form healthier patterns again.
            </p>
          </div>

          {/* Spiritual principle */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Spiritual Principle
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The science describes a mechanism. The Scripture describes the source.
          </p>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "1.5rem 0 2rem", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8 }}>
            A soul cannot heal by only staring at its own wound. At some point, the wounded soul must touch another wound with tenderness and discover: God can still move through me while He is still healing me.
          </blockquote>

          <p style={{ marginBottom: "1.75rem", fontWeight: 600, color: "#0f1e35" }}>That is powerful.</p>

          {/* The caution */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2rem 0", borderLeft: "3px solid #0f1e35" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f1e35", margin: "0 0 0.85rem" }}>The Caution</p>
            <p style={{ margin: "0 0 1rem" }}>Service must come from abiding, not performing.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2" }}>
              <div style={{ background: "#f5f0e8", padding: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.4rem" }}>Performance</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>If I help others to prove my worth, I may become exhausted.</p>
              </div>
              <div style={{ background: "white", padding: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.4rem" }}>Abiding</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.98rem", fontWeight: 600, color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>If I help others because I am abiding in His Love, service becomes fruit — not strain.</p>
              </div>
            </div>
          </div>

          {/* The principle */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "3rem 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1.25rem" }}>The Cleaner Principle</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
              Valuing the lives of others becomes medicine to the soul when it is rooted in love, not obligation.
            </p>
            <div style={{ width: 44, height: 1, background: "rgba(201,168,76,0.3)", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "#c9a84c", lineHeight: 1.8, margin: 0 }}>
              To become an instrument of peace in another person&rsquo;s storm is to remind your own soul that God has not finished using you.
            </p>
          </div>

          {/* Closing */}
          <p style={{ marginBottom: "1.75rem" }}>
            This is not a technique. It is not a productivity hack disguised as theology. It is the ancient truth that love — given freely, rooted in the Vine — produces fruit in the giver as well as the receiver.
          </p>
          <p style={{ marginBottom: "1.75rem" }}>
            The brain changes. The spirit strengthens. The loop breaks.
          </p>
          <p style={{ marginBottom: 0, fontWeight: 600, color: "#0f1e35", fontSize: "clamp(1.05rem,1.8vw,1.15rem)" }}>
            Not because you forced it.<br/>Because you abided — and love did what love does.
          </p>
        </div>

        {/* Companion article callout */}
        <div style={{ background: "white", border: "1px solid #c9a84c", borderRadius: 2, padding: "1.75rem 2rem", margin: "4rem 0 0", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.35rem" }}>Read the Companion Piece</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.3rem" }}>Valuing the Lives of Others: Becoming an Instrument of Peace</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0 }}>The full spiritual reflection — the principle that this article explains clinically.</p>
          </div>
          <Link href="/articles/valuing-the-lives-of-others" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", borderRadius: 2, background: "#0f1e35", color: "white", display: "inline-flex", whiteSpace: "nowrap" }}>Read →</Link>
        </div>

        {/* Framework badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#compassion" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar VI: Compassion</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🧭 Purpose</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/articles/valuing-the-lives-of-others", label: "Valuing the Lives of Others", desc: "The full spiritual reflection — the principle this article explains clinically." },
              { href: "/journey#compassion", label: "Pillar VI: Compassion", desc: "Healing rarely happens in isolation." },
              { href: "/journey#discipline", label: "Pillar IV: Discipline", desc: "Small daily actions rewire the mind. Repetition builds new pathways." },
              { href: "/depression", label: "Depression Hub", desc: "When the soul grows tired — and the path back to hope." },
              { href: "/articles/when-nothing-seems-to-work", label: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark." },
              { href: "/purpose", label: "Purpose Hub", desc: "From survival mode into the life you were created to live." },
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
          Not because you forced it. Because you abided — and love did what love does.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
