import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Journey Path | Silence the Noise™",
  description: "Seven steps toward wholeness. The Silence the Noise™ journey from Awareness through Integration.",
};

const steps = [
  { id: "awareness",   num: "I",   title: "Begin with Awareness",         color: "#c9a84c",
    desc: "Name the noise. Understand its source. You cannot silence what you refuse to name. Labeling reduces amygdala activation and begins the journey toward truth.",
    scripture: "\"Be still, and know that I am God.\" — Psalm 46:10",
    tools: ["Name what you are feeling — out loud or in writing","Identify the specific thought driving the anxiety","Ask: Is this true, or is this noise?"],
    links: [{ label: "Anxiety Hub", href: "/anxiety" },{ label: "The Must Framework", href: "/articles" }] },
  { id: "surrender",  num: "II",  title: "Move into Surrender",           color: "#b8975e",
    desc: "Release the illusion of control. Ishmael represents what we produce by strength. Isaac represents what only promise produces. Some things must be received — not produced.",
    scripture: "\"Cast all your anxiety on him because he cares for you.\" — 1 Peter 5:7",
    tools: ["List what you are trying to control","Circle what is actually within your influence","Release the rest — in prayer or in writing"],
    links: [{ label: "Faith Hub", href: "/faith" },{ label: "Depression Hub", href: "/depression" }] },
  { id: "identity",   num: "III", title: "Recover Identity",              color: "#a8885a",
    desc: "Separate yourself from your diagnosis, your story, your fear. You are not the anxious version of you. Identity precedes circumstance. When a belief becomes identity, letting it go feels like death — but it is actually freedom.",
    scripture: "\"I have called you by name; you are mine.\" — Isaiah 43:1",
    tools: ["Write: I am not my ___","Name who you were before the noise began","Find one true thing about yourself that noise cannot touch"],
    links: [{ label: "PTSD & Trauma Hub", href: "/ptsd" },{ label: "Teachings", href: "/teachings" }] },
  { id: "discipline", num: "IV",  title: "Practice Discipline",           color: "#98795a",
    desc: "The brain strengthens what you repeat. Fear practiced becomes identity. Peace practiced becomes identity. Transformation does not come from intensity — it comes from repetition. Romans 12:2 is a neuroplasticity protocol.",
    scripture: "\"Be transformed by the renewing of your mind.\" — Romans 12:2",
    tools: ["Choose one daily habit from the 20 Rewiring Tools","Practice it at the same time each day for 7 days","Track it — what you measure, you strengthen"],
    links: [{ label: "Body & Nutrition Hub", href: "/body" },{ label: "7-Day Reset", href: "/resources" }] },
  { id: "renewal",    num: "V",   title: "Grow Under Pressure",           color: "#886a5a",
    desc: "The stone cried 'Why am I breaking?' The Sculptor replied: 'You are not breaking. You are becoming.' Storms reveal foundations — and can become the very places of growth you never expected.",
    scripture: "\"Consider it pure joy whenever you face trials of many kinds.\" — James 1:2",
    tools: ["Name the current storm","Ask: What is this revealing in me?","Ask: What is this building in me?"],
    links: [{ label: "Faith Hub", href: "/faith" },{ label: "Teachings", href: "/teachings" }] },
  { id: "compassion", num: "VI",  title: "Reconnect Through Compassion",  color: "#785a5a",
    desc: "Healing rarely happens in isolation. Contempt hardens the heart. Exhaustion blunts the edge. Neither produces renewal. Allow yourself to be known, and allow others to walk beside you.",
    scripture: "\"Carry each other's burdens.\" — Galatians 6:2",
    tools: ["Name one person you trust","Share one true thing with them this week","Extend to yourself what you would give a grieving friend"],
    links: [{ label: "Depression Hub", href: "/depression" },{ label: "Community", href: "/membership" }] },
  { id: "integration",num: "VII", title: "Live Integrated",               color: "#684a4a",
    desc: "Mind, body, spirit, relationships, and purpose — no longer at war. This is the Whole Person Protocol fully expressed. This is the life you were made for, and it begins with a single step taken again today.",
    scripture: "\"I have come that they may have life, and have it to the full.\" — John 10:10",
    tools: ["Weekly: Where am I aligned?","Weekly: Where is there noise?","Weekly: What one thing will I practice this week?"],
    links: [{ label: "Purpose Hub", href: "/purpose" },{ label: "Full Framework", href: "/framework" }] },
];

export default function JourneyPage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Hero */}
      <section style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The Silence the Noise™ Framework</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1rem" }}>The Journey Path</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
            Seven steps toward wholeness. The journey is not linear — but it has direction. Each step reveals the next, and every step is supported by clinical insight and scriptural truth.
          </p>
        </div>
        {/* Step navigation */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginTop: "3rem" }}>
          {steps.map(s => (
            <a key={s.id} href={`#${s.id}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.4rem 0.85rem", borderRadius: 2, border: "1px solid rgba(201,168,76,0.3)", color: "rgba(255,255,255,0.6)", background: "transparent" }}>
              {s.num} · {s.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, idx) => (
        <section key={step.id} id={step.id} style={{ padding: "6rem 2rem", background: idx % 2 === 0 ? "white" : "#faf7f2", scrollMarginTop: "80px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "120px 1fr", gap: "3rem", alignItems: "start" }}>

            {/* Number */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", border: `2px solid ${step.color}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1rem", color: step.color }}>{step.num}</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", marginTop: "0.75rem" }}>Pillar {step.num}</p>
            </div>

            {/* Content */}
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Step {idx + 1} of 7</p>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1rem" }}>{step.title}</h2>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#4a4040", lineHeight: 1.85, margin: "0 0 1.5rem" }}>{step.desc}</p>

              {/* Scripture */}
              <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.25rem", fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#0f1e35", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
                {step.scripture}
              </blockquote>

              {/* Practice tools */}
              <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.5rem 2rem", marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.85rem" }}>Practice This Week</p>
                {step.tools.map((tool, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: i < step.tools.length - 1 ? "0.6rem" : 0 }}>
                    <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.65rem", color: "rgba(201,168,76,0.6)", minWidth: "1.2rem", marginTop: "0.15rem" }}>{i + 1}.</span>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.98rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: 0 }}>{tool}</p>
                  </div>
                ))}
              </div>

              {/* Related links */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                {step.links.map(l => (
                  <Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>
                    {l.label} →
                  </Link>
                ))}
                {idx < steps.length - 1 && (
                  <a href={`#${steps[idx + 1].id}`} style={{ marginLeft: "auto", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>
                    Next: {steps[idx + 1].title} ↓
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer CTA */}
      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", color: "rgba(255,255,255,0.4)", fontSize: "1.1rem", margin: "0 0 2.5rem" }}>One system. One journey. One framework. One message.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/membership" className="btn btn-gold">Join the Community →</Link>
          <Link href="/framework" className="btn btn-outline-light">Explore the Framework</Link>
        </div>
      </section>
    </div>
  );
}
