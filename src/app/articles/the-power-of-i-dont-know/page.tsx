import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Power of I Don't Know | Silence the Noise™",
  description: "When the mind believes it already knows, exploration stops. I don't know may be one of the most powerful statements a person can make. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "The Power of I Don't Know | Dr. Samuel E. Wilson, MD",
    description: "Curiosity is movement of the mind. Faith is movement of the spirit. Both begin with the humility to admit incomplete understanding.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Header */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>
              ● Part of Silence the Noise™
            </Link>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Pillar I: Awareness
            </Link>
            <Link href="/journey#identity" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Pillar III: Identity
            </Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              🧭 Purpose
            </Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              ✝ Faith & Renewal
            </Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            The Power of &ldquo;I Don&rsquo;t Know&rdquo;
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            It is often treated as weakness. Psychologically and spiritually, it may be one of the most powerful statements a person can make.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>7 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Neuroscience · Faith · Curiosity</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          <p style={{ marginBottom: "1.75rem" }}>
            When the mind believes it already knows, exploration stops. The brain begins protecting existing conclusions rather than searching for new understanding. Curiosity diminishes because certainty has occupied the space where discovery once lived.
          </p>

          {/* Key statement */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.2rem,2.2vw,1.5rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>
              &ldquo;I don&rsquo;t know&rdquo; creates a gap.<br/>
              <span style={{ color: "#c9a84c" }}>And the human mind is naturally driven to close gaps.</span>
            </p>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            In psychology, this is sometimes described as an information gap. When we become aware that there is something we do not understand, attention becomes focused. Questions arise. Connections form. The brain begins searching memories, experiences, books, conversations, observations, and possibilities.
          </p>

          {/* Child section */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>A Child&apos;s Natural State</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#4a4040", lineHeight: 1.85, margin: "0 0 1.25rem" }}>
              A child lives in this state naturally — asking thousands of questions because they are comfortable admitting they do not know.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "0.75rem" }}>
              {["Why is the sky blue?","Why do birds fly?","Why do people die?","What is beyond the stars?"].map(q => (
                <div key={q} style={{ background: "#faf7f2", borderRadius: 2, padding: "1rem 1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#0f1e35", margin: 0, lineHeight: 1.55 }}>{q}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", fontStyle: "italic", lineHeight: 1.8, margin: "1.25rem 0 0" }}>
              Adults often become less curious because they become less comfortable with uncertainty.
            </p>
          </div>

          <p style={{ marginBottom: "1.25rem" }}>Yet many breakthroughs begin with:</p>
          <div style={{ margin: "0 0 2.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["I don't know why this happened.","I don't know if this assumption is correct.","I don't know what I am missing.","I don't know what God is teaching me here."].map(s => (
              <div key={s} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                <span style={{ color: "#c9a84c", marginTop: "0.15rem", fontSize: "0.7rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>{s}</p>
              </div>
            ))}
          </div>

          {/* Four domains */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "#e4ddd2", margin: "2.5rem 0" }}>
            {[
              { domain: "In Science", result: "starts discovery." },
              { domain: "In Medicine", result: "prevents dangerous assumptions." },
              { domain: "In Relationships", result: "creates listening." },
              { domain: "In Faith", result: "creates humility." },
            ].map(({ domain, result }) => (
              <div key={domain} style={{ background: "white", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.5rem" }}>{domain}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", margin: 0, lineHeight: 1.6 }}>
                  <em style={{ color: "#c9a84c" }}>&ldquo;I don&rsquo;t know&rdquo;</em> {result}
                </p>
              </div>
            ))}
          </div>

          {/* Job section */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            The Book of Job
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The Scriptures contain this pattern repeatedly. Job spent much of the narrative trying to understand suffering. God&rsquo;s response was not to provide every answer but to reveal how much larger reality was than Job&rsquo;s understanding.
          </p>
          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            Job ultimately arrived at a place of humility before mystery — and it was in that place that God spoke most clearly.
          </blockquote>

          {/* Two modes */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            Two Modes of the Mind
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2.5rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Mode 1</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>Defending what it knows</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>Certainty. Protection. Stagnation.</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>Mode 2</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "white", margin: "0 0 0.5rem" }}>Exploring what it does not know</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>Curiosity. Discovery. Growth.</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            Many people become trapped because they unconsciously defend old beliefs, old fears, old identities, or even old wounds. They are no longer asking questions. The mind has settled into certainty.
          </p>
          <p style={{ marginBottom: "1.75rem", fontWeight: 600, color: "#0f1e35" }}>
            The statement &ldquo;I don&rsquo;t know&rdquo; reopens possibility.
          </p>

          {/* Maybe section */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>Notice How Each Question Creates Movement</p>
            {["Maybe my fear is not the whole story.","Maybe this failure is teaching something.","Maybe there is another path.","Maybe I have misunderstood someone.","Maybe God is doing something I cannot yet see."].map(q => (
              <div key={q} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.65rem 0", borderBottom: "1px solid #f0ebe1" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", marginTop: "0.2rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>{q}</p>
              </div>
            ))}
          </div>

          {/* Curiosity and Faith */}
          <div style={{ background: "#0f1e35", padding: "2.5rem", margin: "3rem 0", borderRadius: 2 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 0 1rem" }}>
              Curiosity is movement of the mind.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.4rem)", color: "#c9a84c", lineHeight: 1.8, margin: 0 }}>
              Faith, in many ways, is movement of the spirit.
            </p>
            <div style={{ width: 44, height: 1, background: "rgba(201,168,76,0.3)", margin: "1.5rem 0" }} />
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>
              Both often begin with the humility to admit incomplete understanding.
            </p>
          </div>

          {/* Two kinds of I don't know */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            Two Kinds of &ldquo;I Don&rsquo;t Know&rdquo;
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", margin: "1.5rem 0 2.5rem" }}>
            <div style={{ border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.75rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Resignation</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontStyle: "italic", color: "#6b6256", margin: "0 0 0.75rem", lineHeight: 1.65 }}>&ldquo;I don&rsquo;t know, and I give up.&rdquo;</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.92rem", color: "#9a9189", margin: 0, lineHeight: 1.6 }}>Closes the gap. Ends the search. Settles into noise.</p>
            </div>
            <div style={{ border: "1px solid #c9a84c", borderRadius: 2, padding: "1.75rem", background: "rgba(201,168,76,0.03)" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.75rem" }}>Exploration</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontStyle: "italic", color: "#0f1e35", margin: "0 0 0.75rem", lineHeight: 1.65 }}>&ldquo;I don&rsquo;t know, therefore I will seek.&rdquo;</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>Opens the gap. Starts the search. Silences the noise.</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            The second version has built civilizations, discovered medicines, explored oceans, developed theology, and transformed lives.
          </p>

          {/* Closing */}
          <div style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "3rem 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8, margin: 0 }}>
              The unknown is not merely an absence of knowledge.<br/>It is often the birthplace of understanding.
            </p>
          </div>

          {/* Closing question */}
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>A Question to Sit With</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#0f1e35", lineHeight: 1.85, margin: 0 }}>
              Is the phrase &ldquo;I don&rsquo;t know&rdquo; creating curiosity in you because it exposes a gap in knowledge — or because it gives permission for your mind to explore possibilities that certainty had previously blocked?
            </p>
          </div>

        </div>

        {/* Bottom badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#identity" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar III: Identity</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🧭 Purpose</Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>✝ Faith & Renewal</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#awareness", label: "Pillar I: Awareness", desc: "Recognize the noise before it controls you." },
              { href: "/journey#identity", label: "Pillar III: Identity", desc: "You are not your diagnosis, your fear, or your past." },
              { href: "/purpose", label: "Purpose Hub", desc: "From survival mode into the life you were created to live." },
              { href: "/articles/when-nothing-seems-to-work", label: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark." },
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
          The unknown is not an absence of knowledge. It is the birthplace of understanding.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
