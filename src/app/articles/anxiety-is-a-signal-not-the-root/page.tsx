import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxiety Is a Signal, Not the Root Cause | Silence the Noise™",
  description: "Anxiety frequently acts as the dashboard warning light rather than the engine problem itself. A physician's framework for understanding, naming, and moving through anxiety. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "Anxiety Is a Signal, Not the Root Cause | Dr. Samuel E. Wilson, MD",
    description: "What if anxiety is not the enemy? What if anxiety is an invitation to discover what we fear losing, where we seek control, and where we have not yet learned to trust God?",
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
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Anxiety Is Often a Signal,<br/>Not the Root Cause
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            Anxiety frequently acts as the dashboard warning light rather than the engine problem itself. The question is not how to silence the alarm — it is what the alarm is telling you.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>8 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Clinical Teaching · Anxiety · Neuroscience · Faith</span>
          </div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────────────────── */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          {/* Opening */}
          <p style={{ marginBottom: "1.75rem" }}>
            Anxiety is frequently misunderstood as the problem itself. A physician&rsquo;s instinct, however, is always to ask a deeper question: what is this symptom telling me about what lies beneath it?
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            The dashboard warning light in your car is not the problem. It is the message. Turning off the warning light does not fix the engine. And treating anxiety only at the surface — without understanding its source — rarely produces lasting freedom.
          </p>

          {/* Underlying drivers */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.25rem" }}>
            Common Underlying Drivers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2.5rem" }}>
            {[
              ["Fear of uncertainty","The mind cannot tolerate not knowing what comes next."],
              ["Loss of control","When life feels ungovernable, anxiety often fills the gap."],
              ["Unresolved grief","Loss that has not been processed creates ongoing alarm."],
              ["Trauma or PTSD","The nervous system learned danger — and hasn't unlearned it."],
              ["Chronic stress & exhaustion","A depleted system has fewer resources to regulate fear."],
              ["Health concerns","The body and mind are not separate. Physical threat activates anxiety."],
              ["Financial insecurity","Survival fear is ancient, real, and neurologically powerful."],
              ["Spiritual disconnection","When purpose is lost, the soul generates its own noise."],
              ["Identity confusion","\"Who am I now?\" is one of the most anxiety-producing questions a person can ask."],
            ].map(([driver, desc]) => (
              <div key={driver} style={{ background: "white", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>{driver}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.35rem)", color: "#c9a84c", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
              The question becomes:
            </p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.35rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>
              What is the anxiety trying to protect me from?
            </p>
          </div>

          {/* The Anxiety Cycle */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Anxiety Cycle
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Anxiety is not random. It follows a predictable cycle — and understanding the cycle is the first step toward interrupting it.
          </p>

          {/* Cycle steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            {[
              { num: "01", step: "Event Occurs", note: "Something happens — real or imagined, present or anticipated." },
              { num: "02", step: "Interpretation", note: "The mind assigns meaning. This is where anxiety is often born." },
              { num: "03", step: "Physical Response", note: "The body receives the signal and responds — heart rate, breathing, tension." },
              { num: "04", step: "Emotional Response", note: "Fear, dread, panic, or unease follow the physical alarm." },
              { num: "05", step: "Behavioral Response", note: "Avoidance, hypervigilance, withdrawal, or overcompensation." },
              { num: "06", step: "Reinforcement of Fear", note: "The cycle completes — and strengthens. The mind learns what it repeatedly practices." },
            ].map(({ num, step, note }) => (
              <div key={num} style={{ display: "grid", gridTemplateColumns: "64px 1fr", background: "white" }}>
                <div style={{ background: "#0f1e35", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 0" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", color: "rgba(201,168,76,0.6)", letterSpacing: "0.1em" }}>{num}</span>
                </div>
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.3rem", letterSpacing: "0.05em" }}>{step}</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Example */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "1.5rem 0 2.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>An Example in Motion</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Sensation", "Heart races"],
                ["Thought", "\"Something is wrong.\""],
                ["Emotion", "Fear"],
                ["Behavior", "Hypervigilance"],
                ["Result", "Anxiety strengthens"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "0.5rem 0", borderBottom: "1px solid #f0ebe1" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9189", minWidth: 90, marginTop: "0.1rem" }}>{label}</span>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ marginBottom: "2.5rem", fontWeight: 600, color: "#0f1e35" }}>
            The mind learns what it repeatedly practices.
          </p>

          {/* Biblical — Israel */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Israelites: A Biblical Picture of Anxiety
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The Scriptures provide a striking portrait of anxiety that many people recognize in themselves.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>What Happened First</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", fontWeight: 600, margin: "0 0 0.5rem" }}>The chains came off.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>They were physically free from Egypt before they were mentally free.</p>
            </div>
            <div style={{ background: "white", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>What Took Longer</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#0f1e35", fontWeight: 600, margin: "0 0 0.5rem" }}>The mindset changed much later.</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.98rem", color: "#6b6256", margin: 0, lineHeight: 1.7 }}>The wilderness was not merely a journey through geography. It was a journey through thinking.</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            Many people experience anxiety similarly. The danger has passed. The mind still behaves as if the danger remains. This mirrors what we see clinically in trauma and PTSD — and what Paul described in Romans 12:2 as the need for the mind to be renewed, not merely the circumstances to change.
          </p>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0 2.5rem", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            The deeper challenge may not be leaving the place of bondage. It may be renewing the mind so that the old bondage no longer governs the heart.
          </blockquote>

          {/* Anxiety and the future */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            Anxiety and the Future
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Anxiety often attempts to live in a future that has not arrived. It is a time traveler — dragging the body and nervous system into tomorrow&rsquo;s feared events before they exist.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2rem" }}>
            <div style={{ background: "#faf7f2", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9189", margin: "0 0 0.75rem" }}>Fear asks</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "#6b6256", margin: 0 }}>&ldquo;What if?&rdquo;</p>
            </div>
            <div style={{ background: "#0f1e35", padding: "2rem" }}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", margin: "0 0 0.75rem" }}>Faith asks</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "white", margin: 0 }}>&ldquo;What is true today?&rdquo;</p>
            </div>
          </div>

          <p style={{ marginBottom: "1.25rem" }}>Jesus repeatedly directed attention back to the present:</p>
          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "1.5rem 0 1rem", fontStyle: "italic", fontSize: "1.1rem", color: "#0f1e35", lineHeight: 1.75 }}>
            &ldquo;Take therefore no thought for the morrow&hellip;&rdquo; — Matthew 6:34
          </blockquote>
          <p style={{ marginBottom: "2.5rem", color: "#6b6256", fontStyle: "italic" }}>
            Not because tomorrow is unimportant — but because tomorrow is not controllable.
          </p>

          {/* Physiology */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Body Participates
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            Anxiety is not merely a thought. It is a whole-body experience. Understanding the physiology helps destigmatize the experience and directs us toward the right interventions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1px", background: "#e4ddd2", margin: "1.5rem 0 2.5rem" }}>
            {[
              ["Sympathetic Nervous System", "The fight-or-flight branch activates — preparing for a threat whether or not one exists."],
              ["Adrenaline & Cortisol", "Stress hormones flood the body, raising heart rate, blood pressure, and alertness."],
              ["Increased Vigilance", "The brain scans for danger constantly — exhausting its resources on perceived threat."],
              ["Muscle Tension", "The body prepares to fight or flee. Over time, this produces chronic pain and fatigue."],
              ["Sleep Disruption", "A nervous system that cannot down-regulate cannot rest — and rest is when healing occurs."],
              ["Conditioned Response", "The body can become trained to anxiety even when the mind wants peace."],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: "white", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem", letterSpacing: "0.04em" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Path toward freedom */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            The Path Toward Freedom
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The goal is not the elimination of all anxiety. The goal is freedom from the tyranny of anxiety — so that it no longer governs your decisions, your relationships, or your sense of self.
          </p>

          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "1.5rem 0 2rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.5rem" }}>Seven Steps</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                ["Recognize it", "Name the anxiety. Label it. \"I am experiencing anxiety.\" This alone reduces amygdala activation."],
                ["Name it", "Be specific. Is it fear of failure? Of loss? Of the unknown? Of God's silence?"],
                ["Identify its source", "What is the anxiety trying to protect you from? Follow the signal to its root."],
                ["Challenge what is untrue", "Anxiety often carries distorted beliefs. Examine them against reality and Scripture."],
                ["Replace fear with truth", "Not positive thinking — but accurate thinking. What is actually true today?"],
                ["Act despite discomfort", "Courage is not the absence of fear. It is movement in the presence of fear."],
                ["Repeat until new pathways form", "Neuroplasticity requires repetition. Freedom is built through practice, not a single breakthrough."],
              ].map(([step, desc], i) => (
                <div key={step} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "1rem", padding: "1.25rem 0", borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", color: "rgba(201,168,76,0.5)", paddingTop: "0.15rem" }}>0{i + 1}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, color: "white", margin: "0 0 0.3rem", letterSpacing: "0.05em" }}>{step}</p>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ marginBottom: "2.5rem", fontStyle: "italic", color: "#6b6256" }}>
            Freedom is rarely a single breakthrough. It is usually many small acts of courage.
          </p>

          {/* Anxiety as teacher */}
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, color: "#0f1e35", margin: "3rem 0 1.25rem" }}>
            What If Anxiety Is Not the Enemy?
          </h2>

          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.25rem", margin: "1.5rem 0 2rem" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1.25rem" }}>What If Anxiety Is an Invitation?</p>
            {[
              "what we fear losing,",
              "where we seek control,",
              "what wounds remain unhealed,",
              "and where we have not yet learned to trust God?",
            ].map(q => (
              <div key={q} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.5rem 0", borderBottom: "1px solid #f0ebe1" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", marginTop: "0.25rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#0f1e35", margin: 0, lineHeight: 1.65 }}>An invitation to discover {q}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2rem 0 2.5rem", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: 0 }}>
              In that sense, anxiety becomes a teacher. Not a pleasant one. But sometimes a revealing one.
            </p>
          </div>

          <p style={{ marginBottom: "1.75rem" }}>
            The Israelites&rsquo; journey from Egypt is not merely ancient history. It is a map of inner experience. The deeper challenge was not escaping a geography — it was escaping a way of thinking. The wilderness was the space where God worked on their minds while they walked with their feet.
          </p>

          <p style={{ marginBottom: "0", fontWeight: 600, color: "#0f1e35", fontSize: "clamp(1.05rem,1.8vw,1.2rem)" }}>
            And He does the same with us.
          </p>

        </div>

        {/* Framework badges */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#awareness" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar I: Awareness</Link>
            <Link href="/journey#discipline" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar IV: Discipline</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#awareness", label: "Pillar I: Awareness", desc: "Recognize the noise before it controls you." },
              { href: "/journey#discipline", label: "Pillar IV: Discipline", desc: "Small daily actions create transformation. Repetition builds new pathways." },
              { href: "/anxiety", label: "Anxiety Hub", desc: "All articles, tools, and framework content on anxiety." },
              { href: "/articles/when-nothing-seems-to-work", label: "When Nothing Seems to Work", desc: "For the reader who has tried everything and is still in the dark." },
              { href: "/articles/the-power-of-i-dont-know", label: "The Power of I Don't Know", desc: "Curiosity is movement of the mind. Faith is movement of the spirit." },
              { href: "/ptsd", label: "PTSD & Trauma Hub", desc: "When the nervous system learned danger — and hasn't unlearned it." },
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
          Freedom is rarely a single breakthrough. It is usually many small acts of courage.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
