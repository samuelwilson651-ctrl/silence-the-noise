import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking & Workshops | Silence the Noise™",
  description: "Book Dr. Samuel E. Wilson, MD for keynotes, workshops, and retreats — for churches, healthcare conferences, universities, and wellness events.",
};

const keynotes = [
  { num:"01", title:"The Vagus Nerve & the Fruit of the Spirit", duration:"45–60 min", audience:"Churches · Healthcare · Wellness", desc:"Connecting Galatians 5 to the neuroscience of vagal regulation and whole-person healing. Faith and biology as one integrated system. One of the most requested presentations." },
  { num:"02", title:"Silence the Noise™: A Physician's Framework for Anxiety, Depression, and Purpose", duration:"60–90 min", audience:"All Audiences", desc:"The full Silence the Noise™ framework delivered as a keynote. Seven pillars, clinical insight, scriptural depth, and practical tools. Designed for anyone carrying more than they can bear." },
  { num:"03", title:"The \"Must\" That Breaks Us: Understanding Anxiety Through Neuroscience and Faith", duration:"45–60 min", audience:"Mental Health · Churches · Universities", desc:"A clinical and spiritual framework for understanding how rigid certainty produces suffering — and how neuroplasticity and scripture together produce freedom." },
  { num:"04", title:"PTSD Integration — A Four-Pillar Recovery Framework", duration:"60–90 min", audience:"Veterans · Survivors · Healthcare · Faith Communities", desc:"Trauma-informed, scripture-anchored, science-grounded. Designed for veterans, survivors, healthcare providers, and faith communities ready to move beyond symptom management." },
  { num:"05", title:"Renewal Is a Rhythm: The 7-Day Neuro-Spiritual Reset", duration:"45–60 min", audience:"Churches · Wellness · Corporate", desc:"Romans 12:2 with neuroplasticity research. A repeatable daily protocol accessible to any audience. Practical, memorable, and immediately actionable." },
  { num:"06", title:"Builder vs. Spectator: Legacy, Culture & the Courage to Construct", duration:"45–60 min", audience:"Leadership · Universities · Churches", desc:"Character, conviction, and the long arc of faithful, generative presence in culture. For leaders who want to build something that lasts." },
];

export default function SpeakingPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Speaking & Workshops</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Bringing the Message<br/>to Your Community
          </h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: "0 0 2rem" }}>
            Dr. Wilson speaks to churches, universities, healthcare conferences, and wellness events. Measured, grounded, intelligent, and quietly authoritative. Research-informed, scripture-grounded, and deeply practical. His presentations are not loud. They are deep.
          </p>
          <a href="#inquire" className="btn btn-gold">Book a Speaking Engagement →</a>
        </div>
      </header>

      {/* Keynotes */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Keynote Topics</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2" }}>
            {keynotes.map(k => (
              <div key={k.num} style={{ background: "white", padding: "2.25rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1rem", color: "rgba(201,168,76,0.4)", minWidth: "2.5rem", paddingTop: "0.1rem" }}>{k.num}</span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.25rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.6rem", lineHeight: 1.35 }}>{k.title}</h2>
                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                      <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>{k.duration}</span>
                      <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{k.audience}</span>
                    </div>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", lineHeight: 1.75, margin: 0 }}>{k.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: "#0f1e35", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>What to Expect</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "rgba(201,168,76,0.08)" }}>
            {[["Research-Informed","Neuroscience, clinical evidence, and peer-reviewed research — presented in accessible, memorable language."],["Scripture-Grounded","Every presentation connects clinical insight to scriptural truth. Faith and science as partners, not opponents."],["Practically Applied","Every session ends with something the audience can do — a tool, a practice, a next step."],["Quietly Authoritative","Not loud, not performative. Deep conviction, measured delivery, and real wisdom from real clinical experience."]].map(([title, desc]) => (
              <div key={title} style={{ background: "#1a2e4a", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "white", margin: "0 0 0.6rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquire" style={{ padding: "6rem 2rem", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Book a Speaking Engagement</p>
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1rem" }}>Let&rsquo;s Bring This Message to Your Community</h2>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            To inquire about availability, fees, and customization for your event, please use the contact form. Dr. Wilson&rsquo;s team responds within 3–5 business days.
          </p>
          <Link href="/contact" className="btn btn-gold" style={{ display: "inline-flex", fontSize: "0.82rem", padding: "1rem 2.5rem" }}>Submit a Speaking Inquiry →</Link>
        </div>
      </section>
    </div>
  );
}
