import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caring for Others Opens a Window | Silence the Noise™ Devotional",
  description: "Depression often collapses the world inward. But caring for others opens a window. The soul remembers: I am not empty. I am still able to give — and in giving, I too am being restored. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Caring for Others Opens a Window | Dr. Samuel E. Wilson, MD",
    description: "Caring moves the soul outward. It gives the mind a mission, the hands a purpose, and the heart a reason to rise.",
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
            Caring for Others<br/>Opens a Window
          </h1>

          {/* Scripture */}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.75rem 0", margin: "0 auto", maxWidth: 520 }}>
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
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Depression · Compassion · Service · Healing</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Part 1 — Scripture */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>The Word</p>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0", marginBottom: "1.25rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Bear ye one another&rsquo;s burdens, and so fulfil the law of Christ.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: 0 }}>Galatians 6:2</p>
          </div>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid rgba(201,168,76,0.3)", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", margin: 0 }}>John 15:5</p>
          </div>
        </div>

        {/* Part 2 — Reflection */}
        <div style={{ marginBottom: "3.5rem", paddingBottom: "3.5rem", borderBottom: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Reflection</p>

          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

            {/* What depression does */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "0 0 2.5rem" }}>
              <div style={{ background: "#f5f0e8", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Depression</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>
                  Often collapses the world inward. It makes the self feel heavy, isolated, and sealed off. It folds pain upon pain until the heart can see only its own darkness.
                </p>
              </div>
              <div style={{ background: "white", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.75rem" }}>Caring for Others</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", lineHeight: 1.75, margin: 0 }}>
                  Opens a window. It gives the heart a direction beyond its own pain. It reminds the soul: <em>I still have something to give.</em>
                </p>
              </div>
            </div>

            {/* The polished reflection */}
            <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "0 0 2.5rem" }}>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.9, margin: 0 }}>
                One is not easily swallowed by despair when caring for others. For depression often turns the soul inward, folding pain upon pain until the heart can see only its own darkness. But caring moves the soul outward. It gives the mind a mission, the hands a purpose, and the heart a reason to rise.
              </p>
            </div>

            <p style={{ marginBottom: "1.75rem" }}>
              In considering the journey of another, we are gently pulled from the prison of self. Not because our wounds disappear — but because love begins to move through them.
            </p>

            {/* Three movements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
              {[
                { thing: "Caring", becomes: "becomes light." },
                { thing: "Service", becomes: "becomes breath." },
                { thing: "The soul remembers:", becomes: "I am not empty. I am still able to give." },
              ].map(row => (
                <div key={row.thing} style={{ display: "grid", gridTemplateColumns: "160px 1fr", background: "white" }}>
                  <div style={{ background: "#0f1e35", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center" }}>
                    <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.75rem", color: "#c9a84c", margin: 0, letterSpacing: "0.05em" }}>{row.thing}</p>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center" }}>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>{row.becomes}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The vine */}
            <p style={{ marginBottom: "1.75rem" }}>
              This is not willpower. It is not performance or the forcing of a smile. It is the natural result of abiding in the Vine. The branch does not produce fruit by straining — it produces fruit by staying connected. And the fruit it produces feeds others, yes. But it also proves the branch is alive.
            </p>

            <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0 2.5rem", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.25rem)", color: "#0f1e35", lineHeight: 1.85 }}>
              When love moves, healing begins. Not always in the one we serve — but always in the one who serves. And in giving, we too are being restored.
            </blockquote>

            {/* The mystery again */}
            <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2rem 0" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>The Miracle Within the Ministry</p>
              <p style={{ margin: "0 0 1rem" }}>One is less likely to remain trapped inside depression when caring for others — not because caring cures depression, but because it interrupts depression&rsquo;s most powerful strategy: isolation.</p>
              <p style={{ margin: 0, fontStyle: "italic", color: "#6b6256" }}>
                Depression whispers: <em style={{ color: "#9a9189" }}>You have nothing to offer.</em><br/>
                Service answers: <em style={{ color: "#0f1e35", fontStyle: "normal", fontWeight: 600 }}>Someone&rsquo;s storm eased because you showed up.</em>
              </p>
            </div>

          </div>
        </div>

        {/* Part 3 — Prayer */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Prayer</p>
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", borderLeft: "3px solid #c9a84c" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#0f1e35", lineHeight: 1.9, margin: 0 }}>
              Lord, when depression turns my eyes inward, pull them outward. Show me one person whose burden I can share, one soul whose storm I can enter with gentleness. I may not have much today. But I have Your presence. And where Your presence abides, fruit is possible. Let me be a branch that stays connected — not to perform, not to prove, but to love. And as I give, remind my soul of what is still alive in me.
              <span style={{ display: "block", marginTop: "1.25rem", fontStyle: "normal", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", color: "#9a9189", letterSpacing: "0.08em" }}>Amen.</span>
            </p>
          </div>
        </div>

        {/* Framework connection */}
        <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.75rem 2rem", marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.85rem" }}>Framework Connection</p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {[
              { label: "Pillar VI: Compassion", href: "/journey#compassion" },
              { label: "Pillar VII: Integration", href: "/journey#integration" },
              { label: "🌧 Depression Hub", href: "/depression" },
              { label: "✝ Faith & Renewal", href: "/faith" },
            ].map(b => (
              <Link key={b.href} href={b.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", padding: "0.3rem 0.7rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>{b.label}</Link>
            ))}
          </div>
        </div>

        {/* Companion article */}
        <div style={{ background: "white", border: "1px solid #c9a84c", borderRadius: 2, padding: "1.75rem 2rem", marginBottom: "3.5rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.35rem" }}>Read the Full Teaching</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.3rem" }}>Valuing the Lives of Others: Becoming an Instrument of Peace</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0 }}>The full spiritual and clinical exploration of this devotional&rsquo;s theme.</p>
          </div>
          <Link href="/articles/valuing-the-lives-of-others" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 1.75rem", borderRadius: 2, background: "#0f1e35", color: "white", display: "inline-flex", whiteSpace: "nowrap" }}>Read →</Link>
        </div>

        {/* Bottom badges */}
        <div style={{ paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2", marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/devotionals" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>← All Devotionals</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/articles/valuing-the-lives-of-others", label: "Valuing the Lives of Others", desc: "The full teaching on becoming an instrument of peace." },
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
          In giving, we too are being restored.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/devotionals" className="btn btn-gold">All Devotionals →</Link>
          <Link href="/depression" className="btn btn-outline-light">Depression Hub</Link>
        </div>
      </section>
    </div>
  );
}
