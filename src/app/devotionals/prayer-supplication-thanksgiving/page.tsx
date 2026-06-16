import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer, Supplication, and Thanksgiving | Silence the Noise™ Devotional",
  description: "Prayer establishes nearness. Supplication expresses dependence. Thanksgiving restores perspective. And God's peace begins to heal the anxious heart. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Prayer, Supplication, and Thanksgiving | Dr. Samuel E. Wilson, MD",
    description: "You do not heal anxiety by pretending it is not there. You bring it. You name it. You surrender it.",
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
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Faith & Renewal</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.2, margin: "0 0 1.5rem" }}>
            Prayer, Supplication,<br/>and Thanksgiving
          </h1>

          {/* Scripture */}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.75rem 0", margin: "0 auto", maxWidth: 560 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#c9a84c", lineHeight: 1.8, margin: "0 0 0.6rem" }}>
              &ldquo;Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>Philippians 4:6–7</p>
          </div>

          {/* Meta */}
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>4 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Prayer · Anxiety · Peace</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Part 1 — Scripture */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>The Word</p>
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: "0 0 0.75rem" }}>
              &ldquo;Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", margin: 0 }}>Philippians 4:6–7</p>
          </div>
        </div>

        {/* Part 2 — Reflection */}
        <div style={{ marginBottom: "3.5rem", paddingBottom: "3.5rem", borderBottom: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Reflection</p>

          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

            {/* Opening */}
            <p style={{ marginBottom: "1.75rem" }}>
              Notice where Paul begins. Not with the request. Not with the need. Not with the storm.
            </p>
            <p style={{ marginBottom: "2.5rem" }}>
              He begins with prayer — which is relationship. Presence before petition. <em style={{ color: "#0f1e35" }}>Not panic first. Presence first.</em>
            </p>

            {/* Three movements */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "2.5rem 0" }}>
              {[
                {
                  word: "Prayer",
                  subtitle: "Establishes Nearness",
                  body: "The model Jesus gave begins with relationship, not request. \"Our Father\" — not \"emergency line to heaven.\" Prayer orients the soul toward the One who holds it. It starts with who God is, before it moves into what we need.",
                  color: "#0f1e35",
                  textColor: "white",
                  subColor: "rgba(201,168,76,0.7)",
                },
                {
                  word: "Supplication",
                  subtitle: "Expresses Dependence",
                  body: "Supplication is the honest cry: help me, hold me, guide me, deliver me. It is not polished. It is not performance. It is need made plain before a God who already knows — but who invites us to bring it anyway.",
                  color: "#f5f0e8",
                  textColor: "#0f1e35",
                  subColor: "#9a9189",
                },
                {
                  word: "Thanksgiving",
                  subtitle: "Restores Perspective",
                  body: "Thanksgiving is not denial of pain. It is recognition that God has not stopped being God in the middle of it. It steadies the heart. It interrupts fear's claim that all is lost — by remembering all that has not been lost.",
                  color: "white",
                  textColor: "#0f1e35",
                  subColor: "#9a9189",
                },
              ].map(({ word, subtitle, body, color, textColor, subColor }) => (
                <div key={word} style={{ background: color, padding: "2rem 2.25rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.85rem", marginBottom: "0.6rem" }}>
                    <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1rem", color: textColor === "white" ? "#c9a84c" : "#0f1e35", margin: 0, letterSpacing: "0.08em" }}>{word}</p>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: subColor, margin: 0 }}>{subtitle}</p>
                  </div>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: textColor === "white" ? "rgba(255,255,255,0.8)" : "#4a4040", lineHeight: 1.85, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* How it moves in anxiety */}
            <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.35rem", fontWeight: 600, color: "#0f1e35", margin: "2.5rem 0 1rem" }}>Why This Matters in Anxiety</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Anxiety narrows the mind. It pulls thought inward, downward, faster. It reduces the world to the worry and the worry to the self.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
              {[
                ["Anxiety", "narrows the mind."],
                ["Prayer", "lifts the gaze."],
                ["Anxiety", "rehearses the worst."],
                ["Supplication", "releases the burden."],
                ["Anxiety", "claims all is lost."],
                ["Thanksgiving", "reorders the heart."],
              ].map(([agent, action], i) => (
                <div key={`${agent}-${i}`} style={{ background: i % 2 === 0 ? "#f5f0e8" : "white", padding: "1.25rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: i % 2 === 0 ? "#9a9189" : "#c9a84c", margin: "0 0 0.3rem" }}>{agent}</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#0f1e35", margin: 0, lineHeight: 1.6 }}>{action}</p>
                </div>
              ))}
            </div>

            {/* Notice the order */}
            <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2rem 2.25rem", margin: "2rem 0" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>Notice the Order</p>
              {[
                "You do not heal anxiety by pretending it is not there.",
                "You bring it.",
                "You name it.",
                "You surrender it.",
                "And while surrendering it — you remember who has carried you before.",
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.5rem 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  {i > 0 && <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.65rem", marginTop: "0.25rem", minWidth: "0.75rem" }}>▸</span>}
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: i === 0 ? "normal" : "italic", fontSize: "1.05rem", color: i === 0 ? "rgba(255,255,255,0.6)" : i === 4 ? "#c9a84c" : "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.7 }}>{line}</p>
                </div>
              ))}
            </div>

            {/* What healing looks like */}
            <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.35rem", fontWeight: 600, color: "#0f1e35", margin: "2.5rem 0 1rem" }}>What Healing Often Looks Like</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Healing in anxiety is often not instant removal. Sometimes it is the guarding of the heart within the storm.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", margin: "1.5rem 0 2rem", paddingLeft: "1.25rem", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
              {[
                "A settledness that should not be there — but is.",
                "A breath that slows.",
                "A mind that stops spiraling for a moment.",
                "A reminder: I am not alone in this.",
              ].map(line => (
                <p key={line} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", margin: 0, lineHeight: 1.75 }}>{line}</p>
              ))}
            </div>

            {/* The peace that passes understanding */}
            <div style={{ textAlign: "center", padding: "2.5rem 2rem", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, margin: "2.5rem 0" }}>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "#9a9189", margin: "0 0 0.75rem" }}>The promise in Philippians 4:7</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
                &ldquo;The peace of God, which passeth all understanding, <em>shall keep</em> your hearts and minds through Christ Jesus.&rdquo;
              </p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>
                &ldquo;Keep&rdquo; in the original Greek — <em>phrourēsei</em> — carries the image of a military garrison standing guard. God&rsquo;s peace is not passive. It is a sentinel posted at the door of your heart.
              </p>
            </div>

            {/* Refined line */}
            <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2.5rem 0", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#0f1e35", lineHeight: 1.85 }}>
              In anxiety, prayer turns me toward the Father; supplication lays the wound before Him; thanksgiving reminds my trembling heart that His mercy has not failed — and in that turning, releasing, and remembering, peace begins to heal what fear has troubled.
            </blockquote>
          </div>
        </div>

        {/* Part 3 — Prayer */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Prayer</p>
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", borderLeft: "3px solid #c9a84c" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#0f1e35", lineHeight: 1.9, margin: 0 }}>
              Father, I come to You not because I have it together, but because You are the one who holds it together. I bring what I cannot fix. I name what I cannot explain. I lay before You what anxiety has amplified and what fear has distorted. I choose to trust that Your mercy has not stopped. Your care has not diminished. Your peace — the kind that makes no sense to my troubled mind — is available to me now. Guard my heart. Guard my mind. Remind me that I am not in this alone.
              <span style={{ display: "block", marginTop: "1.25rem", fontStyle: "normal", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", color: "#9a9189", letterSpacing: "0.08em" }}>Amen.</span>
            </p>
          </div>
        </div>

        {/* Framework connection */}
        <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.75rem 2rem", marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.85rem" }}>Framework Connection</p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {[
              { label: "Pillar I: Awareness", href: "/journey#awareness" },
              { label: "Pillar II: Surrender", href: "/journey#surrender" },
              { label: "🌀 Anxiety Hub", href: "/anxiety" },
              { label: "✝ Faith & Renewal", href: "/faith" },
            ].map(b => (
              <Link key={b.href} href={b.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", padding: "0.3rem 0.7rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>{b.label}</Link>
            ))}
          </div>
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
              { href: "/journey#surrender", label: "Pillar II: Surrender", desc: "Release what was never yours to carry." },
              { href: "/journey#awareness", label: "Pillar I: Awareness", desc: "Recognize the noise before it controls you." },
              { href: "/articles/anxiety-is-a-signal-not-the-root", label: "Anxiety Is a Signal, Not the Root", desc: "The dashboard warning light is not the engine problem." },
              { href: "/anxiety", label: "Anxiety Hub", desc: "All articles and framework content on anxiety." },
              { href: "/devotionals/every-day-the-sun-rises", label: "Every Day the Sun Rises", desc: "Before we feel strong enough — the light comes." },
              { href: "/faith", label: "Faith & Renewal Hub", desc: "Hearing the gentle whisper when the world is shouting." },
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
          In that turning, releasing, and remembering — peace begins to heal what fear has troubled.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/devotionals" className="btn btn-gold">All Devotionals →</Link>
          <Link href="/faith" className="btn btn-outline-light">Faith & Renewal Hub</Link>
        </div>
      </section>
    </div>
  );
}
