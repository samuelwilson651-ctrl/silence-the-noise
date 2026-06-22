import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caring for Others Opens the Window | Silence the Noise™ Devotional",
  description: "One is not easily swallowed by despair when caring for others. For depression often turns the soul inward — but caring moves it outward. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Caring for Others Opens the Window | Dr. Samuel E. Wilson, MD",
    description: "Caring becomes light. Service becomes breath. The soul remembers: I am not empty; I am still able to give.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function DevotionalPage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>● Part of Silence the Noise™</Link>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>✝ Devotional</span>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>✝ Faith & Renewal</Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.2, margin: "0 0 1.5rem" }}>
            Caring for Others<br/>Opens the Window
          </h1>

          {/* Scripture */}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.75rem 0", margin: "0 auto", maxWidth: 540 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#c9a84c", lineHeight: 1.8, margin: "0 0 0.6rem" }}>
              &ldquo;Bear ye one another&rsquo;s burdens, and so fulfil the law of Christ.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>Galatians 6:2</p>
          </div>

          {/* Meta */}
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>3 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Depression · Service · Healing · Purpose</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Part 1 — Scripture */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>The Word</p>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0", marginBottom: "1rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Bear ye one another&rsquo;s burdens, and so fulfil the law of Christ.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: "0 0 1.25rem" }}>Galatians 6:2</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: 0 }}>John 15:4</p>
          </div>
        </div>

        {/* Part 2 — Reflection */}
        <div style={{ marginBottom: "3.5rem", paddingBottom: "3.5rem", borderBottom: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Reflection</p>

          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

            {/* What depression does */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "0 0 2.5rem" }}>
              <div style={{ background: "#f5f0e8", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>What depression does</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>
                  Turns the soul inward. Folds pain upon pain. Seals the heart inside its own darkness. Heavy. Isolated. Still.
                </p>
              </div>
              <div style={{ background: "#0f1e35", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>What caring does</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, margin: 0 }}>
                  Moves the soul outward. Gives the mind a mission. Gives the hands a purpose. Opens a window.
                </p>
              </div>
            </div>

            <p style={{ marginBottom: "1.75rem" }}>
              One is not easily swallowed by despair when caring for others.
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              Depression often collapses the world inward. It makes the self feel heavy, isolated, sealed off — as though the soul has been reduced to the size of its own wound. The mind circles. The heart contracts. The darkness becomes the whole horizon.
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              But caring moves the soul outward.
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              It gives the mind a mission. The hands a purpose. The heart a reason to rise.
            </p>

            {/* The movement */}
            <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: 0 }}>
                In considering the journey of another, we are gently pulled from the prison of self. Not because our wounds disappear — but because love begins to move through them.
              </p>
            </div>

            <p style={{ marginBottom: "1.75rem" }}>
              This is the quiet miracle of compassion. The wound does not have to close before it can become a door. The soul does not have to be healed before it can carry light. God does not wait for our wholeness before He uses us. He works through the broken places — if we let Him.
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              There is something about helping another person breathe that teaches your own lungs to breathe again. Not because the effort erases the pain, but because love interrupts the loop. The mind stops rehearsing despair long enough to say: <em style={{ color: "#0f1e35" }}>I still have something to give. I can still matter. I can still be useful in love.</em>
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              And in the moment that sentence becomes true — something shifts.
            </p>

            {/* Three movements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "2.5rem 0" }}>
              {[
                ["Caring becomes light.", "It breaks the sealed room. It lets something in."],
                ["Service becomes breath.", "The soul that has forgotten how to inhale finds rhythm again."],
                ["Giving becomes receiving.", "The blessing poured out returns — transformed."],
              ].map(([headline, sub]) => (
                <div key={headline} style={{ background: "white", padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginTop: "0.3rem", flexShrink: 0 }}>▸</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem" }}>{headline}</p>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The remembering */}
            <div style={{ textAlign: "center", padding: "2.5rem", background: "#0f1e35", borderRadius: 2, margin: "2.5rem 0" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 1.25rem" }}>The Soul Remembers</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.5rem" }}>
                I am not empty.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.5rem" }}>
                I am still able to give.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "#c9a84c", lineHeight: 1.85, margin: 0 }}>
                And in giving, I too am being restored.
              </p>
            </div>

            <p style={{ marginBottom: "1.75rem" }}>
              But notice — this is not a call to perform. It is not an instruction to ignore your own need or to replace healing with service. The branch cannot bear fruit by striving. The branch bears fruit by abiding. Connection is the source. Love flows from connection, not from willpower.
            </p>

            <p style={{ marginBottom: "0", fontStyle: "italic", color: "#6b6256" }}>
              So the invitation is not: <em style={{ color: "#0f1e35", fontStyle: "normal" }}>go fix someone else.</em><br/>
              The invitation is: <em style={{ color: "#0f1e35", fontStyle: "normal" }}>stay connected to the Vine — and let the fruit appear.</em>
            </p>
          </div>
        </div>

        {/* Part 3 — Prayer */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Prayer</p>
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", borderLeft: "3px solid #c9a84c" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#0f1e35", lineHeight: 1.9, margin: 0 }}>
              Father, depression has told me I have nothing left to give. But You say otherwise. You say I am still a branch connected to the Vine. You say love still flows through what remains. Today, open a window in this sealed room. Give me one person to see. One moment to serve. One act of kindness to offer — however small. And remind my soul in the giving that I am not empty. That I am not finished. That You are still at work in me — and through me — even now.
              <span style={{ display: "block", marginTop: "1.25rem", fontStyle: "normal", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", color: "#9a9189", letterSpacing: "0.08em" }}>Amen.</span>
            </p>
          </div>
        </div>

        {/* Companion article */}
        <div style={{ background: "white", border: "1px solid #c9a84c", borderRadius: 2, padding: "1.75rem 2rem", marginBottom: "3.5rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.35rem" }}>Read the Full Article</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.3rem" }}>Valuing the Lives of Others: Becoming an Instrument of Peace</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0 }}>The full theological and clinical reflection behind this devotional&rsquo;s principle.</p>
          </div>
          <Link href="/articles/valuing-the-lives-of-others" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", borderRadius: 2, background: "#0f1e35", color: "white", display: "inline-flex", whiteSpace: "nowrap" }}>Read →</Link>
        </div>

        {/* Framework badges */}
        <div style={{ paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2", marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#compassion" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar VI: Compassion</Link>
            <Link href="/journey#integration" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar VII: Integration</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/devotionals" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>← All Devotionals</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/articles/valuing-the-lives-of-others", label: "Valuing the Lives of Others", desc: "The full spiritual reflection on becoming an instrument of peace." },
              { href: "/articles/helping-others-interrupts-depressions-loop", label: "Helping Others Interrupts Depression's Loop", desc: "The neuroscience behind why service heals the servant." },
              { href: "/journey#compassion", label: "Pillar VI: Compassion", desc: "Healing rarely happens in isolation." },
              { href: "/depression", label: "Depression Hub", desc: "When the soul grows tired — and the path back to hope." },
              { href: "/devotionals/every-day-the-sun-rises", label: "Every Day the Sun Rises", desc: "Before we feel strong enough — the light comes." },
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
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: 0 }}>
              Dr. Wilson is a physician and faith-centered voice committed to helping people restore clarity, purpose, and hope through the Silence the Noise™ framework.
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
          Stay connected to the Vine — and let the fruit appear.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/devotionals" className="btn btn-gold">All Devotionals →</Link>
          <Link href="/depression" className="btn btn-outline-light">Depression Hub</Link>
        </div>
      </section>
    </div>
  );
}
