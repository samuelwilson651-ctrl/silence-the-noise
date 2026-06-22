import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teachings | Silence the Noise™",
  description: "Signature frameworks and teachings by Dr. Samuel E. Wilson, MD — where Scripture meets neuroscience.",
};

const teachings = [
  { title: "The \"Must\" That Breaks Us", pillar: "Pillar I · Pillar III", category: "Anxiety", desc: "Anxiety is a future \"must\" not being met. Depression is a past \"must\" judged as failure. Healing begins when you question the must.", quote: "Anxiety and depression are not just emotional states — they are misinterpretations held with certainty.", href: "/articles/anxiety-is-a-signal-not-the-root" },
  { title: "The Heart as Interpreter of Reality", pillar: "Pillar III · Pillar VII", category: "Purpose", desc: "Two people stand at the same sunrise: one sees hope, one sees burden. God promises not new circumstances first, but a new heart — because the heart is the interpreter of all experience.", scripture: "Ezekiel 36:26 · Matthew 6:21 · Proverbs 4:23", href: "/purpose" },
  { title: "Renewal Is a Rhythm, Not an Event", pillar: "Pillar IV", category: "Depression · Body", desc: "The brain strengthens what you repeat. Fear practiced becomes identity. Peace practiced becomes identity. Transformation does not come from intensity — it comes from repetition.", scripture: "Romans 12:2", href: "/articles/when-nothing-seems-to-work" },
  { title: "Ishmael & Isaac", pillar: "Pillar II", category: "Faith", desc: "Ishmael represents what we produce by strength. Isaac represents what only promise produces through surrender. Self-effort says 'I must make this happen.' Promise says 'He who spoke is faithful.'", quote: "Not everything that can be produced should be pursued.", href: "/faith" },
  { title: "The Sculptor and the Stone", pillar: "Pillar V", category: "Faith · Depression", desc: "The stone cried 'Why am I breaking?' The Sculptor replied: 'You are not breaking. You are becoming.' The Sculptor never strikes without purpose and never abandons unfinished work.", quote: "You are not being reduced. You are being revealed.", href: "/articles/when-nothing-seems-to-work" },
  { title: "Builder vs. Spectator", pillar: "Pillar VII", category: "Purpose", desc: "The most durable influence comes not from cultural combatants but from parallel builders — those who educate, model, train, and stabilize. They build the deepest.", scripture: "Galatians 6:9 · Ephesians 4:15", href: "/purpose" },
  { title: "The Vagus Nerve & the Fruit of the Spirit", pillar: "Pillar IV · Pillar VII", category: "Body · Faith", desc: "The vagus nerve governs rest, recovery, and calm — the primary biological pathway through which the body receives peace. Practicing the Fruit of the Spirit is simultaneously a spiritual and neurological exercise.", scripture: "Galatians 5:22–23 · Philippians 4:7", href: "/body" },
  { title: "The Gut-Brain-Spirit Connection", pillar: "Pillar IV", category: "Body", desc: "The enteric nervous system, vagal tone, microbiome, and inflammatory pathways all connect the gut to the brain — and the brain to mood, fear, and spiritual experience. What you eat affects how you feel, pray, and think.", href: "/body" },
];

export default function TeachingsPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Signature Frameworks</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Core Teachings</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Each teaching integrates clinical precision, scriptural depth, and practical wisdom — drawn from decades of caring for people in their most vulnerable moments.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(380px,1fr))", gap: "1.5rem" }}>
            {teachings.map(t => (
              <Link key={t.title} href={t.href} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{t.pillar}</span>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{t.category}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.25rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{t.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.98rem", color: "#6b6256", lineHeight: 1.75, fontStyle: "italic", margin: 0 }}>{t.desc}</p>
                {t.quote && <blockquote style={{ borderLeft: "2px solid #c9a84c", paddingLeft: "0.85rem", fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>&ldquo;{t.quote}&rdquo;</blockquote>}
                {t.scripture && <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", color: "#9a9189", letterSpacing: "0.08em", margin: 0 }}>{t.scripture}</p>}
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid #e4ddd2" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1e35", textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "white", letterSpacing: "0.07em", margin: "0 0 0.5rem" }}>
          Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>One system. One journey. One framework. One message.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/framework" className="btn btn-gold">Explore the Framework →</Link>
          <Link href="/journey" className="btn btn-outline-light">Begin the Journey</Link>
        </div>
      </section>
    </div>
  );
}
