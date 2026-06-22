import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Framework | Silence the Noise™",
  description: "The Silence the Noise™ framework — seven pillars for restoring alignment between mind, body, spirit, purpose, and relationships. Dr. Samuel E. Wilson, MD.",
};

const pillars = [
  { num: "I",   id: "awareness",   title: "Awareness",             tagline: "Recognize the noise before it controls you.", color: "#c9a84c",
    body: "You cannot silence what you refuse to name. The first act of healing is honest acknowledgment — labeling the anxiety, the fear, the grief, the anger. Neuroscience confirms that naming an emotion reduces amygdala activation. Scripture confirms that the truth sets free. Awareness is where the journey begins.",
    scripture: "\"Be still, and know that I am God.\" — Psalm 46:10",
    practice: "Name what you are experiencing. Write it in one sentence. Not 'everything is wrong' — but the specific thing that is wrong.",
    links: [{ label: "Anxiety Hub", href: "/anxiety" },{ label: "Anxiety Is a Signal", href: "/articles/anxiety-is-a-signal-not-the-root" }] },
  { num: "II",  id: "surrender",   title: "Surrender",             tagline: "Release what was never yours to carry.", color: "#b8975e",
    body: "Control is an illusion the anxious mind pursues relentlessly. Surrender is not passivity — it is the wisdom to recognize the boundary between your responsibility and God's sovereignty. The Israelites were free from Egypt long before they were free in their minds. Surrender is the mind catching up with what God has already done.",
    scripture: "\"Cast all your anxiety on him because he cares for you.\" — 1 Peter 5:7",
    practice: "List what you are trying to control. Circle what is actually within your influence. Release the rest in prayer.",
    links: [{ label: "5 Steps Through Uncertainty", href: "/articles/when-uncertainty-arrives-5-steps" },{ label: "Effort, Trust & Control", href: "/articles/effort-trust-and-the-limits-of-control" }] },
  { num: "III", id: "identity",    title: "Identity",              tagline: "You are not your diagnosis, your trauma, or your past.", color: "#a8885a",
    body: "When a wound becomes a name, healing becomes nearly impossible. The person who identifies as 'the anxious one,' 'the depressed one,' or 'the one who was broken' has made their suffering their identity. But God names people differently. Before the diagnosis, before the trauma, before the failure — there is a person God called by name. Recovering that name is the work of Pillar Three.",
    scripture: "\"I have called you by name; you are mine.\" — Isaiah 43:1",
    practice: "Complete this sentence: 'I am not _____. I am _____.' Identity precedes circumstance.",
    links: [{ label: "The Power of I Don't Know", href: "/articles/the-power-of-i-dont-know" },{ label: "PTSD & Trauma Hub", href: "/ptsd" }] },
  { num: "IV",  id: "discipline",  title: "Discipline",            tagline: "Small daily actions create transformation.", color: "#988555",
    body: "The brain strengthens what it repeatedly practices. Fear practiced becomes identity. Peace practiced becomes identity. Romans 12:2 is not a motivational poster — it is a neuroplasticity protocol. Renewal of the mind happens through repetition, not resolution. Transformation does not come from intensity; it comes from consistency.",
    scripture: "\"Be transformed by the renewing of your mind.\" — Romans 12:2",
    practice: "Choose one practice from the 20 Rewiring Tools. Do it at the same time every day for seven days. Measure nothing. Simply repeat.",
    links: [{ label: "Body & Nutrition Hub", href: "/body" },{ label: "Anxiety Is a Signal", href: "/articles/anxiety-is-a-signal-not-the-root" }] },
  { num: "V",   id: "renewal",     title: "Renewal Under Pressure", tagline: "Storms reveal foundations — and become places of growth.", color: "#886a5a",
    body: "The stone cried: 'Why am I breaking?' The Sculptor replied: 'You are not breaking. You are becoming.' Pressure is not punishment. Difficulty is not evidence of abandonment. The wilderness was not a mistake in Israel's journey — it was the curriculum. What appears to be destruction is often formation. The soul that endures discovers foundations it did not know it had.",
    scripture: "\"Consider it pure joy whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.\" — James 1:2–3",
    practice: "Name the current storm. Ask two questions: What is this revealing in me? What is this building in me?",
    links: [{ label: "When Nothing Seems to Work", href: "/articles/when-nothing-seems-to-work" },{ label: "Faith & Renewal Hub", href: "/faith" }] },
  { num: "VI",  id: "compassion",  title: "Compassion",            tagline: "Healing rarely happens in isolation.", color: "#785a5a",
    body: "Depression turns the soul inward. Compassion turns it outward. Research consistently links prosocial behavior — serving, connecting, caring — with reduced depressive symptoms and greater meaning. But this is not a clinical finding dressed in religious language. It is the ancient truth that the branch bears fruit by abiding in the Vine — and fruit, by definition, feeds others. The healed soul and the healing soul are often the same person at different moments.",
    scripture: "\"Bear ye one another's burdens, and so fulfil the law of Christ.\" — Galatians 6:2",
    practice: "Name one person whose burden you can share this week. Take one concrete action — a call, a visit, a meal, a prayer.",
    links: [{ label: "Valuing the Lives of Others", href: "/articles/valuing-the-lives-of-others" },{ label: "Caring for Others Opens a Window", href: "/devotionals/caring-for-others-opens-a-window" }] },
  { num: "VII", id: "integration", title: "Integration",           tagline: "Mind, body, spirit, purpose, and relationships brought into alignment.", color: "#684a4a",
    body: "Integration is not the absence of struggle. It is the end of fragmentation. When mind, body, spirit, purpose, and relationships are no longer at war with each other — when the decisions you make align with the person you believe yourself to be — that is integration. It is the Whole Person Protocol fully expressed. It is the life you were created to live, not when everything is perfect, but when everything is aligned.",
    scripture: "\"I have come that they may have life, and have it to the full.\" — John 10:10",
    practice: "Weekly integration review: Where am I aligned? Where is there noise? What one thing will I practice this week?",
    links: [{ label: "Purpose Hub", href: "/purpose" },{ label: "The Full Journey", href: "/journey" }] },
];

export default function FrameworkPage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Hero */}
      <section style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Dr. Samuel E. Wilson, MD</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1rem" }}>The Silence the Noise™ Framework</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Seven principles — not a checklist, but a way of moving through the world. Each builds on the last and leads toward wholeness. Where Scripture meets neuroscience. Where clinical insight meets faith.
          </p>
          {/* Pillar navigation */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {pillars.map(p => (
              <a key={p.id} href={`#${p.id}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", padding: "0.35rem 0.85rem", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 2 }}>
                {p.num} · {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What the noise is */}
      <section style={{ background: "white", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>The Core Premise</p>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 600, color: "#0f1e35", lineHeight: 1.2, margin: "0 0 1rem" }}>You are not fighting a diagnosis. You are fighting noise.</h2>
              <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.85 }}>
                Anxiety, depression, PTSD, fear, burnout, and spiritual exhaustion are often treated as separate problems. But many of them share one deeper reality: the noise has become louder than the truth. The Silence the Noise™ framework addresses the whole person — not just the symptom.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2" }}>
              {[
                ["🧠","Noise in the Mind","Anxious loops, rumination, and catastrophic thinking."],
                ["🫀","Noise in the Body","Inflammation, sleeplessness, and unprocessed pain."],
                ["📡","Noise in the Culture","Comparison, performance, and distraction."],
                ["✝","Noise in the Spirit","Disconnection from God, purpose, and truth."],
                ["🪞","Noise in Identity","When a diagnosis becomes the name you answer to."],
                ["🤝","Noise in Relationships","Isolation and wounds carried alone."],
              ].map(([icon,title,desc]) => (
                <div key={title} style={{ background: "white", padding: "1rem 1.25rem", display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", minWidth: "1.5rem" }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.15rem" }}>{title}</p>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "#6b6256", margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seven Pillars */}
      {pillars.map((p, idx) => (
        <section key={p.id} id={p.id} style={{ padding: "6rem 2rem", background: idx % 2 === 0 ? "#faf7f2" : "white", scrollMarginTop: 80 }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "100px 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Number */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 76, height: 76, borderRadius: "50%", border: `2px solid ${p.color}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1rem", color: p.color }}>{p.num}</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", marginTop: "0.75rem" }}>Pillar {p.num}</p>
            </div>
            {/* Content */}
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Pillar {p.num} of 7</p>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>{p.title}</h2>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", margin: "0 0 1.5rem" }}>{p.tagline}</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#4a4040", lineHeight: 1.9, margin: "0 0 1.5rem" }}>{p.body}</p>
              <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.25rem", margin: "0 0 1.5rem", fontStyle: "italic", fontSize: "1rem", color: "#0f1e35", lineHeight: 1.75 }}>{p.scripture}</blockquote>
              <div style={{ background: "#0f1e35", borderRadius: 2, padding: "1.25rem 1.5rem", margin: "0 0 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Practice This Week</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.75 }}>{p.practice}</p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {p.links.map(l => (
                  <Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>{l.label} →</Link>
                ))}
                <Link href={`/journey#${p.id}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>Full Journey Step →</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: "#0f1e35", textAlign: "center", padding: "7rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>One system. One journey. One framework. One message.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Begin the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
