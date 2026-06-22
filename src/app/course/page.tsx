import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Silence the Noise™ Course | Dr. Samuel E. Wilson, MD",
  description: "The complete Silence the Noise™ Course — 7 modules, clinical insight, scripture, and practical tools. Lifetime access.",
};

const modules = [
  { num:"01", title:"Awareness — Naming the Noise",          duration:"~60 min", desc:"What anxiety, depression, and PTSD actually are — and why treating symptoms without understanding their source rarely produces lasting freedom. Includes the 6-step anxiety cycle." },
  { num:"02", title:"Surrender — Releasing What Was Never Yours", duration:"~50 min", desc:"The distinction between responsibility and control. Why more thinking often produces more exhaustion. The biblical pattern of effort followed by trust." },
  { num:"03", title:"Identity — Recovering Who You Are",     duration:"~55 min", desc:"Separating yourself from your diagnosis, your trauma, and your past. The neuroscience of identity and why labels become self-fulfilling." },
  { num:"04", title:"Discipline — Building New Pathways",    duration:"~65 min", desc:"Neuroplasticity in practice. The 20 Rewiring Tools. Why small daily actions produce transformation when intensity does not. Includes workbook exercises." },
  { num:"05", title:"Renewal Under Pressure",                duration:"~50 min", desc:"The theology and psychology of suffering as formation. Why storms reveal foundations — and can become the greatest catalysts for growth." },
  { num:"06", title:"Compassion — Healing Through Others",   duration:"~45 min", desc:"The neuroscience of prosocial behavior and its effect on depression. Why service becomes medicine when rooted in love, not obligation." },
  { num:"07", title:"Integration — The Whole Person Protocol", duration:"~70 min", desc:"Pulling it all together: mind, body, spirit, purpose, and relationships. Building your personal Silence the Noise™ plan. Weekly integration review protocol." },
];

export default function CoursePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Hero */}
      <header style={{ background: "#0f1e35", padding: "8rem 2rem 6rem", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>7-Module Online Course</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 600, color: "white", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
            Silence the Noise<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
          </h1>
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 400, color: "rgba(255,255,255,0.7)", margin: "0 0 2rem", lineHeight: 1.5 }}>
            A Physician&rsquo;s Complete Framework for Anxiety, Depression, Purpose, and Whole-Person Healing
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#enroll" className="btn btn-gold" style={{ fontSize: "0.88rem", padding: "1rem 2.5rem" }}>Enroll — $297 →</a>
            <a href="#modules" className="btn btn-outline-light">See All 7 Modules</a>
          </div>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "1.25rem", letterSpacing: "0.08em" }}>30-day money-back guarantee · Lifetime access · Works on all devices</p>
        </div>
      </header>

      {/* For who */}
      <section style={{ background: "white", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>This Course Is For You If</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1px", background: "#e4ddd2" }}>
            {[
              "You have tried therapy, medication, or self-help — and something still feels incomplete.",
              "You want a framework that integrates faith and clinical science, not just one or the other.",
              "You are carrying anxiety, depression, PTSD, or grief — and want a clear, structured path forward.",
              "You want to understand the neuroscience beneath your experience — not just manage symptoms.",
              "You are a caregiver, pastor, counselor, or parent who serves people in pain and needs better tools.",
              "You believe healing involves the whole person — mind, body, spirit, purpose, and relationships.",
            ].map((item, i) => (
              <div key={i} style={{ background: "#faf7f2", padding: "1.75rem", display: "flex", gap: "0.85rem" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", marginTop: "0.25rem", flexShrink: 0 }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#4a4040", lineHeight: 1.75, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" style={{ padding: "6rem 2rem", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>7 Modules — Complete Framework</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2" }}>
            {modules.map((m) => (
              <div key={m.num} style={{ background: "white", padding: "2rem", display: "grid", gridTemplateColumns: "72px 1fr", gap: "1.5rem", alignItems: "start" }}>
                <div style={{ background: "#0f1e35", padding: "1.25rem 0", textAlign: "center", borderRadius: 2 }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", margin: "0 0 0.2rem" }}>MOD</p>
                  <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1.1rem", color: "#c9a84c", margin: 0 }}>{m.num}</p>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{m.title}</h3>
                    <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", color: "#9a9189", letterSpacing: "0.06em" }}>{m.duration}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: "#0f1e35", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>What&rsquo;s Included</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
            {[["7 Video Modules","7+ hours of physician-led teaching"],["Workbook PDFs","Downloadable for each module"],["Framework Reference","Complete STN™ framework summary"],["Lifetime Access","Revisit any time, on any device"],["30-Day Guarantee","Full refund, no questions asked"],["Private Community","Access to member discussion board"]].map(([title, desc]) => (
              <div key={title} style={{ background: "#1a2e4a", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.75rem", letterSpacing: "0.12em", color: "#c9a84c", margin: "0 0 0.4rem" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll */}
      <section id="enroll" style={{ padding: "7rem 2rem", textAlign: "center", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Enroll Today</p>
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>Silence the Noise™ Course</h2>
          <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "2rem", color: "#c9a84c", margin: "0 0 0.5rem" }}>$297</p>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: "0 0 2rem" }}>One payment · Lifetime access · 30-day money-back guarantee</p>
          <Link href="/membership" className="btn btn-gold" style={{ fontSize: "0.88rem", padding: "1rem 3rem", display: "inline-flex" }}>Enroll Now →</Link>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#9a9189", marginTop: "1.25rem" }}>
            Already a member? The course is available at a discounted rate in your <Link href="/dashboard" style={{ color: "#c9a84c" }}>dashboard</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
