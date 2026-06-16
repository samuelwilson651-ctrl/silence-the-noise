import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When Nothing Seems to Work | Silence the Noise™",
  description: "If you have prayed, counseled, medicated, exercised, and the noise remains — this is for you. Healing is rarely linear. Dr. Samuel E. Wilson, MD.",
  openGraph: {
    title: "When Nothing Seems to Work | Dr. Samuel E. Wilson, MD",
    description: "The fact that you are still struggling does not mean you are failing.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      {/* Header */}
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Framework badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2, background: "rgba(201,168,76,0.05)" }}>
              ● Part of Silence the Noise™
            </Link>
            <Link href="/journey#renewal" style={{ display: "inline-flex", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              Pillar V: Renewal Under Pressure
            </Link>
            <Link href="/depression" style={{ display: "inline-flex", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              🌧 Depression
            </Link>
            <Link href="/anxiety" style={{ display: "inline-flex", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500, padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}>
              🌀 Anxiety
            </Link>
          </div>

          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            When Nothing Seems to Work
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 2rem", maxWidth: 640 }}>
            For the reader who has tried everything — and is still in the dark. This is not the end of the story.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Dr. Samuel E. Wilson, MD</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>5 min read</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Renewal · Perseverance</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article style={{ maxWidth: 780, margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Opening */}
        <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "#2c2420", lineHeight: 1.95 }}>

          <p style={{ fontSize: "clamp(1.15rem,2vw,1.35rem)", fontStyle: "italic", color: "#0f1e35", marginBottom: "2rem" }}>
            Perhaps you have prayed.<br/>
            Perhaps you have read the books.<br/>
            Perhaps you have gone to counseling.<br/>
            Perhaps you have taken the medication.<br/>
            Perhaps you have exercised, changed your diet, started journaling, listened to podcasts, and filled notebooks with goals.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>And yet, the anxiety remains.</p>
          <p style={{ marginBottom: "1.5rem" }}>The depression still lingers.</p>
          <p style={{ marginBottom: "2.5rem" }}>The noise has not gone silent.</p>

          {/* Callout */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "2.5rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.15rem,2vw,1.35rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.75, margin: 0 }}>
              If that is where you find yourself today, this section is for you.
            </p>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>Because one of the most dangerous conclusions a person can reach is this:</p>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            &ldquo;If these things worked for others and they are not working for me, then something must be wrong with me.&rdquo;
          </blockquote>

          <p style={{ marginBottom: "1.5rem", fontWeight: 600, color: "#0f1e35" }}>That conclusion is often false.</p>

          <p style={{ marginBottom: "1.5rem" }}>Healing is rarely linear.</p>
          <p style={{ marginBottom: "1.5rem" }}>Growth is rarely visible while it is occurring.</p>

          {/* Seed metaphor */}
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem 2.25rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.85, margin: 0 }}>
              A seed underground appears unchanged long before it breaks through the soil.
            </p>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>Many people abandon hope because they mistake slow progress for no progress.</p>
          <p style={{ marginBottom: "1.5rem" }}>Others are trying to solve a spiritual wound with physical tools alone.</p>
          <p style={{ marginBottom: "1.5rem" }}>Some are attempting to solve a physical problem through spiritual effort alone.</p>
          <p style={{ marginBottom: "2.5rem" }}>Still others are carrying burdens so deep that recovery requires time measured in months and years — not days and weeks.</p>

          {/* Three truths */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1px", background: "#e4ddd2", margin: "3rem 0" }}>
            {[
              ["The fact that you are still struggling", "does not mean you are failing."],
              ["The fact that you are tired", "does not mean you are weak."],
              ["The fact that you have not arrived", "does not mean you are lost."],
            ].map(([premise, truth]) => (
              <div key={premise} style={{ background: "white", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.95rem", color: "#9a9189", fontStyle: "italic", marginBottom: "0.5rem" }}>{premise}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{truth}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.5rem" }}>Sometimes the next step is not victory.</p>
          <p style={{ marginBottom: "2.5rem" }}>Sometimes the next step is simply persistence.</p>

          {/* Action list */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", margin: "2.5rem 0" }}>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>For Today</p>
            {["Get up.","Take the walk.","Say the prayer.","Read the page.","Call the friend.","Keep the appointment.","Drink the water.","Eat the meal.","Sleep when you can.","Repeat tomorrow."].map((step) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.7rem" }}>▸</span>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: "1.5rem" }}>There are seasons when faith looks less like conquering and more like enduring.</p>

          <blockquote style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", fontSize: "clamp(1.1rem,1.9vw,1.3rem)", color: "#0f1e35", lineHeight: 1.75 }}>
            The world celebrates breakthroughs.<br/>God often works through perseverance.
          </blockquote>

          <p style={{ marginBottom: "1.5rem" }}>You may not need a new life today.</p>
          <p style={{ marginBottom: "2.5rem" }}>You may only need enough strength for the next hour.</p>

          {/* One step */}
          <div style={{ textAlign: "center", padding: "3rem 2rem", margin: "2.5rem 0", background: "white", border: "1px solid #e4ddd2", borderRadius: 2 }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.2rem,2.5vw,1.65rem)", fontStyle: "italic", color: "#0f1e35", lineHeight: 1.75, margin: "0 0 0.5rem" }}>One step is still movement.</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.2rem,2.5vw,1.65rem)", fontStyle: "italic", color: "#0f1e35", lineHeight: 1.75, margin: "0 0 0.5rem" }}>One step is still progress.</p>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.2rem,2.5vw,1.65rem)", fontStyle: "italic", color: "#c9a84c", lineHeight: 1.75, margin: 0 }}>One step is still hope.</p>
          </div>

          {/* Framework statement */}
          <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "2rem 2.25rem", margin: "3rem 0", borderRadius: "0 2px 2px 0" }}>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.05rem,1.8vw,1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, margin: 0 }}>
              Silence the Noise™ is not built on the promise that life becomes easy. It is built on the conviction that even in the midst of anxiety, depression, uncertainty, grief, trauma, and suffering — there remains a path forward.
            </p>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>Sometimes that path is clear.</p>
          <p style={{ marginBottom: "1.5rem" }}>Sometimes it is barely visible.</p>
          <p style={{ marginBottom: "0", fontWeight: 600, color: "#0f1e35", fontSize: "clamp(1.1rem,1.9vw,1.25rem)" }}>
            But it is still there.<br/>And so are you.
          </p>
        </div>

        {/* Bottom framework badge */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid #e4ddd2" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link href="/framework" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.25rem 0.65rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>● Part of Silence the Noise™</Link>
            <Link href="/journey#renewal" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>Pillar V: Renewal Under Pressure</Link>
            <Link href="/depression" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌧 Depression</Link>
            <Link href="/anxiety" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.25rem 0.65rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>🌀 Anxiety</Link>
          </div>
        </div>

        {/* Related content */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Continue the Journey</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1rem" }}>
            {[
              { href: "/journey#renewal", label: "Pillar V: Renewal Under Pressure", desc: "Storms reveal foundations — and become places of growth." },
              { href: "/depression", label: "Depression Hub", desc: "When the soul grows tired — and the path back to hope." },
              { href: "/anxiety", label: "Anxiety Hub", desc: "Fear of tomorrow, the cost of uncertainty, and the path to peace." },
              { href: "/journey", label: "The Full Journey", desc: "Seven steps toward wholeness — begin wherever you are." },
            ].map((item) => (
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
          The path forward is still there. And so are you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
          <Link href="/membership" className="btn btn-outline-light">Join the Community</Link>
        </div>
      </section>
    </div>
  );
}
