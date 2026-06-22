import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Samuel E. Wilson, MD | Silence the Noise™",
  description: "Dr. Samuel E. Wilson is a physician, author, educator, inventor, and speaker committed to helping people restore clarity, purpose, and hope.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ background: "#1a2e4a", borderRadius: 2, border: "1px solid rgba(201,168,76,0.15)", padding: "3rem 2rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "3rem", color: "rgba(201,168,76,0.3)", marginBottom: "1rem", letterSpacing: "0.1em" }}>SEW</div>
            <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.75rem", letterSpacing: "0.16em", color: "white", margin: "0 0 0.25rem" }}>SAMUEL E. WILSON</p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "#c9a84c", margin: "0 0 1.5rem", letterSpacing: "0.08em" }}>MD</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {["Physician","Author","Educator","Inventor","Speaker"].map(r => (
                <p key={r} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0 }}>{r}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.5rem", justifyContent: "center" }}>
              {["Vagal Science","Neuroplasticity","Trauma Recovery","Spiritual Formation","Whole Person Care"].map(t => (
                <span key={t} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.5rem", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.6)", borderRadius: 2 }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>About</p>
            <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "white", lineHeight: 1.2, margin: "0 0 1rem" }}>Dr. Samuel E. Wilson, MD</h1>
            <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
              Physician · Author · Educator · Inventor · Speaker · Faith-centered voice committed to helping people restore clarity, purpose, and hope.
            </p>
          </div>
        </div>
      </header>

      <section style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#4a4040", lineHeight: 1.9 }}>

            <p style={{ marginBottom: "1.75rem" }}>
              Dr. Samuel E. Wilson is a physician, author, and wellness advocate whose life&rsquo;s work sits at a rare intersection: the integration of Christian faith, clinical neuroscience, and holistic health. His conviction is singular — true healing from anxiety, depression, and PTSD requires addressing the whole person.
            </p>

            <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8 }}>
              &ldquo;My life&rsquo;s work has taught me that many people do not simply need more information. They need less noise.&rdquo;
            </blockquote>

            <p style={{ marginBottom: "1.75rem" }}>
              Drawing on decades of clinical practice and deep theological reflection, Dr. Wilson developed the Whole Person Protocol — a four-pillar framework integrating spiritual formation, nutritional science, physical movement, and evidence-based psychology. His signature insight is that the Fruit of the Spirit described by Paul in Galatians 5 maps directly onto the physiological states governed by vagal regulation — that Scripture and neuroscience are not rivals, but partners.
            </p>

            <p style={{ marginBottom: "1.75rem" }}>
              Through his clinical work, Dr. Wilson has seen firsthand how fear, trauma, uncertainty, disease, and spiritual disconnection affect the whole person — not merely the body, not merely the mind, not merely the spirit, but all three at once. The Silence the Noise™ framework is his response to that reality. It is built not from theory, but from the bedside. From the waiting room. From the conversations that happen when pretense falls away and a person finally tells the truth about what they are carrying.
            </p>

            <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.8 }}>
              &ldquo;The most durable influence comes not from those who shout the loudest — but from those who build the deepest.&rdquo;
            </blockquote>

            <p style={{ marginBottom: "1.75rem" }}>
              Silence the Noise™ brings together his medical insight, spiritual reflection, and decades of experience caring for people in their most vulnerable moments — forming one unified framework to help individuals move from mental chaos toward healing, alignment, and purpose.
            </p>

            {/* Expertise areas */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "#e4ddd2", margin: "3rem 0" }}>
              {[
                { area: "Clinical Medicine", desc: "Decades of frontline care — seeing how fear, trauma, and disease affect the whole person." },
                { area: "Neuroscience & Faith", desc: "The vagus nerve, neuroplasticity, and how Scripture maps to the biology of peace." },
                { area: "Trauma & PTSD", desc: "Integration — not just management — of traumatic experience through a four-pillar framework." },
                { area: "Nutrition & Healing", desc: "The gut-brain-spirit connection and the science of whole-person stewardship." },
                { area: "Speaking & Teaching", desc: "Measured, grounded, and deeply practical presentations for churches, hospitals, and conferences." },
                { area: "Spiritual Formation", desc: "Faith that does not bypass the wound — but walks through it with both Scripture and science." },
              ].map(({ area, desc }) => (
                <div key={area} style={{ background: "white", padding: "1.75rem" }}>
                  <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem", letterSpacing: "0.05em" }}>{area}</p>
                  <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", margin: 0, lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>

          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "3rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
            <Link href="/speaking" className="btn btn-gold">Book a Speaking Engagement →</Link>
            <Link href="/contact" className="btn btn-outline-dark">Get in Touch</Link>
            <Link href="/framework" className="btn btn-outline-dark">Explore the Framework</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
