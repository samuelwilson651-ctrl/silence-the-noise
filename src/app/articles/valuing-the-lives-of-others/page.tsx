import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valuing the Lives of Others: Becoming an Instrument of Peace | Silence the Noise™",
  description: "There is a sacred healing that begins when we learn to value the lives of others. To become an instrument of peace in another person's storm is to remind your own soul that God has not finished using you. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Valuing the Lives of Others | Dr. Samuel E. Wilson, MD",
    description: "The blessing we give becomes part of the blessing we receive. The peace we carry becomes part of the peace we enter.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#compassion" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar VI: Compassion</Link>
            <Link href="/journey#integration" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar VII: Integration</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🧭 Purpose</Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>✝ Faith</Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Valuing the Lives of Others:<br/>Becoming an Instrument of Peace
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            To become an instrument of peace in another person&rsquo;s storm is to remind your own soul that God has not finished using you.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>10 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Depression · Purpose · Compassion · Renewal</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* Opening */}
          <p style={{ fontSize: "clamp(1.15rem,2vw,1.35rem)", fontStyle: "italic", color: "#0f1e35", marginBottom: "2rem", lineHeight: 1.8 }}>
            There is a sacred healing that begins when we learn to value the lives of others.
          </p>

          <div style={{ margin: "0 0 2rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {["Not casually.","Not theoretically.","Not only when we feel strong."].map(s => (
              <p key={s} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", margin: 0 }}>{s}</p>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            But in the middle of our own thirst, our own heaviness, our own inward battle, we discover that God can still use us to bring peace into someone else&rsquo;s storm.
          </p>

          <p style={{ marginBottom: "2.5rem", fontWeight: 600, color: "#0f1e35" }}>That thought is not small.</p>

          {/* Depression narrows the room */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>What Depression Does</p>
            <p style={{ margin: "0 0 1rem" }}>Depression often pulls the soul inward. It narrows the room. It makes the mind rehearse loss, regret, fear, shame, and fatigue. It can make a person feel as though life has become reduced to survival.</p>
            <p style={{ margin: 0, color: "#6b6256", fontStyle: "italic" }}>The mind begins to circle the same painful thoughts again and again, until the soul feels trapped inside its own storm.</p>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>But when we choose to value another life, something changes.</p>
          <p style={{ marginBottom: "1.75rem" }}>
            When we speak encouragement, when we listen with gentleness, when we offer kindness, when we become present to another person&rsquo;s pain — we are no longer only staring at our own wound. We are participating in love. We are allowing God to move through us, even while He is still healing us.
          </p>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.2rem,2.2vw,1.5rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
              That is grace.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#c9a84c", lineHeight: 1.75, margin: 0 }}>
              To become an instrument of peace in someone else&rsquo;s storm is to remind your own soul that God has not finished using you.
            </p>
          </div>

          {/* Three truths */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, margin: "2.5rem 0", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
            {[
              ["You may be tired,","but you are not empty."],
              ["You may be wounded,","but you are not worthless."],
              ["You may be in process,","but you are still a vessel."],
            ].map(([a, b]) => (
              <div key={a} style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", margin: "0 0 0.2rem" }}>{a}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>

          {/* Something about */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "#e4ddd2", margin: "2.5rem 0" }}>
            {[
              ["Helping another person breathe", "teaches your own soul how to breathe again."],
              ["Lifting another person", "causes a hidden strength to awaken in you."],
              ["Giving value to another life", "returns meaning to your own."],
            ].map(([cause, effect]) => (
              <div key={cause} style={{ background: "white", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#9a9189", margin: "0 0 0.5rem" }}>There is something about&hellip;</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#6b6256", fontStyle: "italic", margin: "0 0 0.75rem" }}>{cause}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>&hellip;that {effect}</p>
              </div>
            ))}
          </div>

          <div style={{ margin: "2rem 0 2.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {["This is not performance.","This is not pretending.","This is not denying depression, grief, anxiety, trauma, or pain."].map(s => (
              <p key={s} style={{ fontStyle: "italic", color: "#6b6256", margin: 0 }}>{s}</p>
            ))}
          </div>
          <p style={{ marginBottom: "2.5rem", fontWeight: 600, color: "#0f1e35" }}>It is the quiet truth that love moves life.</p>

          {/* New question */}
          <div style={{ background: "#faf7f2", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>A New Pattern of Mind</p>
            <p style={{ margin: "0 0 1rem" }}>When we become instruments of peace, we begin to practice a different pattern. The mind is no longer rehearsing only despair. The heart is no longer feeding only isolation.</p>
            <p style={{ margin: "0 0 0.75rem" }}>The soul is no longer locked in the question:</p>
            <p style={{ fontStyle: "italic", color: "#6b6256", margin: "0 0 0.75rem" }}>&ldquo;What about me?&rdquo;</p>
            <p style={{ margin: "0 0 0.4rem" }}>It begins to ask:</p>
            <p style={{ fontStyle: "italic", fontWeight: 600, color: "#0f1e35", margin: 0 }}>&ldquo;Lord, how can I serve? How can I bless? How can I bring light here?&rdquo;</p>
          </div>

          <p style={{ marginBottom: "1.75rem", fontWeight: 600, color: "#0f1e35" }}>That question can renew the mind.</p>

          {/* Romans 12:2 */}
          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            Paul wrote, &ldquo;Be ye transformed by the renewing of your mind.&rdquo; Renewal is not simply positive thinking. Renewal is a holy re-patterning. It is the daily surrender of old thoughts, old wounds, old fears, old conclusions, and old identities into the hands of God.
          </blockquote>

          {/* Rebooting */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            Rebooting the Mind
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The mind must be &ldquo;booted&rdquo; again. Like a system that has become overloaded, corrupted, or frozen by too many burdens, the soul must return to the Source. We must allow God to restart what worry has jammed, what fear has distorted, what rejection has damaged, and what exhaustion has shut down.
          </p>
          <p style={{ marginBottom: "1.75rem" }}>And one of the ways He renews us is through love in motion.</p>

          {/* Love in motion */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "2rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.5rem" }}>Love in Motion</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "0.5rem" }}>
              {["A phone call.","A prayer.","A meal.","A visit.","A gentle word.","A patient silence.","A forgiving heart.","A steady presence.","A willingness to see the worth of another soul."].map(act => (
                <div key={act} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "#c9a84c", fontSize: "0.6rem" }}>▸</span>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>{act}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ marginBottom: "2.5rem" }}>
            When I pour value into another person, God often pours meaning back into me.
          </p>

          {/* Caution */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2.5rem 0", borderLeft: "3px solid #0f1e35" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f1e35", margin: "0 0 0.85rem" }}>An Important Caution</p>
            <p style={{ margin: "0 0 1rem" }}>That does not mean we give until we are destroyed. It does not mean we ignore our own need for rest, counsel, treatment, prayer, or support. It does not mean we confuse service with self-neglect.</p>
            <p style={{ fontWeight: 600, color: "#0f1e35", margin: 0 }}>There is a difference between being used by God and being consumed by unhealthy obligation.</p>
          </div>

          {/* Abiding */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            Love Must Come From Abiding
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Jesus said, &ldquo;Abide in me.&rdquo; The branch does not produce fruit by force. The branch produces fruit by connection. Fruit is the evidence of abiding in His Love.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            {[
              { not: "We do not serve to prove we are valuable.", because: "God has already given us value." },
              { not: "We do not love others to earn meaning.", because: "His meaning is already flowing into us." },
              { not: "We do not become instruments of peace because we are never troubled.", because: "Even in our trouble, we remain connected to the Prince of Peace." },
            ].map((row, i) => (
              <div key={i} style={{ background: "white", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#9a9189", margin: "0 0 0.75rem", lineHeight: 1.6 }}>{row.not}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.98rem", fontWeight: 600, color: "#0f1e35", margin: 0, lineHeight: 1.6 }}>{row.because}</p>
              </div>
            ))}
          </div>

          {/* The science */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            The Science Behind the Principle
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Research on prosocial behavior — helping, volunteering, kindness, supporting others — has repeatedly found associations with better well-being, less loneliness, and lower depressive symptoms. Helping others can interrupt depression&rsquo;s loop.
          </p>

          {/* Depression says / love answers */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "2rem 0 2.5rem" }}>
            {[
              { lie: "You have nothing to give.", truth: "A gentle presence is still a gift.", voice: "Love" },
              { lie: "You do not matter.", truth: "Someone's storm was eased because you showed up.", voice: "Service" },
              { lie: "You are alone.", truth: "You are joined to the suffering and healing of others.", voice: "Compassion" },
              { lie: "Nothing will change.", truth: "This moment can become holy.", voice: "Renewed Purpose" },
            ].map(row => (
              <div key={row.lie} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2" }}>
                <div style={{ background: "#f5f0e8", padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.5rem" }}>Depression says</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>&ldquo;{row.lie}&rdquo;</p>
                </div>
                <div style={{ background: "white", padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>{row.voice} answers</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35", margin: 0, lineHeight: 1.6 }}>&ldquo;{row.truth}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Neuroplasticity */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.85rem" }}>Neuroplasticity</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
              When a person repeatedly practices kindness, purposeful action, gratitude, prayer, movement, and connection — the brain is not merely &ldquo;thinking differently.&rdquo; It is rehearsing a different life-pattern. Many effective treatments for depression may work partly by helping the brain form healthier patterns again.
            </p>
          </div>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2.5rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            A soul cannot heal by only staring at its own wound. At some point, the wounded soul must touch another wound with tenderness and discover: God can still move through me while He is still healing me.
          </blockquote>

          {/* The mystery */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            The Mystery
          </h2>

          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "1.5rem 0 2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem" }}>To Value the Lives of Others Is to Stand Against the Lie</p>
            {["Your life matters.","Your pain matters.","Your healing matters.","Your breath matters.","Your storm does not make you invisible."].map(t => (
              <p key={t} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontStyle: "italic", color: "#0f1e35", margin: "0 0 0.4rem", lineHeight: 1.6 }}>{t}</p>
            ))}
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", fontStyle: "italic", margin: "1rem 0 0", lineHeight: 1.8 }}>
              And somehow, while we speak that truth over another person, God lets us hear it for ourselves.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "2.5rem", margin: "2.5rem 0", background: "#0f1e35", borderRadius: 2 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: "0 0 0.5rem" }}>The blessing we give becomes part of the blessing we receive.</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: "0 0 0.5rem" }}>The peace we carry becomes part of the peace we enter.</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "#c9a84c", lineHeight: 1.85, margin: 0 }}>The value we recognize in another life becomes a mirror through which God reminds us of our own.</p>
          </div>

          {/* Fruit */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1rem" }}>
            The Fruit That Appears
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            When we become instruments of peace, we are not merely helping someone else survive their storm. We are allowing God to reshape our own inner weather.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2.5rem" }}>
            {["Kindness","Gentleness","Patience","Mercy","Hope","Peace","Love"].map(fruit => (
              <div key={fruit} style={{ background: "white", padding: "1.25rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{fruit}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.75rem", fontStyle: "italic", color: "#6b6256" }}>
            And against such there is no law.
          </p>
          <p style={{ marginBottom: "1.75rem" }}>
            The life that abides in His Love will bear fruit. The soul that drinks daily from His Spirit will be renewed. The person who values the lives of others will discover that meaning is not found by clutching the self tighter, but by opening the heart wider.
          </p>

          {/* Closing */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "3rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>God Says Through Your Life</p>
            {["I am still here.","I am still healing.","I am still using what remains.","I am still bringing fruit from the branch that abides in Me."].map(line => (
              <p key={line} style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", margin: "0 0 0.4rem", lineHeight: 1.7 }}>{line}</p>
            ))}
          </div>

          {/* Signature */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e4ddd2" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", margin: "0 0 0.25rem" }}>Love,</p>
            <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#0f1e35", margin: 0 }}>Sam</p>
          </div>

        </div>

        {/* Framework badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#compassion" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar VI: Compassion</Link>
            <Link href="/journey#integration" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar VII: Integration</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/purpose" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🧭 Purpose</Link>
            <Link href="/faith" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>✝ Faith</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#compassion", label: "Pillar VI: Compassion", desc: "Healing rarely happens in isolation." },
              { href: "/journey#integration", label: "Pillar VII: Integration", desc: "Mind, body, spirit, purpose, and relationships aligned." },
              { href: "/articles/when-nothing-seems-to-work", label: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark." },
              { href: "/depression", label: "Depression Hub", desc: "When the soul grows tired — and the path back to hope." },
              { href: "/purpose", label: "Purpose Hub", desc: "From survival mode into the life you were created to live." },
              { href: "/journey", label: "The Full Journey", desc: "Seven steps toward wholeness — begin wherever you are." },
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
          The life that abides in His Love will bear fruit.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
