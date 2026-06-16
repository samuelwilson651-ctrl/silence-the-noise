import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devotionals | Silence the Noise™",
  description: "Scripture · Reflection · Prayer. A growing devotional library by Dr. Samuel E. Wilson, MD — organized by theme and framework pillar.",
};

const published = [
  { href: "/devotionals/every-day-the-sun-rises", title: "Every Day the Sun Rises", scripture: "Psalm 27:1", theme: "Morning · Hope · Faithfulness", pillars: ["Pillar I: Awareness","Pillar II: Surrender"], tag: "Faith & Renewal" },
];

const coming = [
  { title: "The Gentle Whisper", scripture: "1 Kings 19:12", theme: "Stillness · Hearing God" },
  { title: "Follow Me", scripture: "Matthew 4:19", theme: "Purpose · Calling" },
  { title: "The Armor of God", scripture: "Ephesians 6:10–18", theme: "Spiritual Warfare · Identity" },
  { title: "Trust Beyond Understanding", scripture: "Proverbs 3:5–6", theme: "Surrender · Faith" },
  { title: "Word Idolatry", scripture: "John 5:39–40", theme: "Scripture · Spirit" },
  { title: "Purpose in Christ", scripture: "Ephesians 2:10", theme: "Purpose · Identity" },
  { title: "The Remnant Within the Noise", scripture: "1 Kings 19:18", theme: "Community · Faithfulness" },
  { title: "The Difference Between Prayer and Worship", scripture: "Psalm 95:6", theme: "Prayer · Worship" },
];

export default function DevotionalsPage() {
  return (
    <div style={{ background: "#faf7f2" }}>

      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "1.75rem" }}>✝</span>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", margin: 0 }}>Devotional Library</p>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>
            Scripture · Reflection · Prayer
          </h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: "0 0 1.5rem" }}>
            Each devotional follows a three-part structure — grounding in the Word, reflection for the heart, and a prayer that moves from passive learning into active spiritual transformation.
          </p>
          <a href="https://devotional-discovery.lovable.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Open Devotional App ↗
          </a>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Published */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem" }}>Published Devotionals</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
            {published.map((d) => (
              <Link key={d.href} href={d.href} style={{ display: "block", background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem", position: "relative" }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", padding: "0.2rem 0.6rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 2 }}>✝ {d.tag}</span>
                  {d.pillars.map(p => (
                    <span key={p} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256", padding: "0.2rem 0.6rem", border: "1px solid #e4ddd2", borderRadius: 2 }}>{p}</span>
                  ))}
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.35rem,2.5vw,1.75rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>{d.title}</h2>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#c9a84c", margin: "0 0 0.35rem" }}>{d.scripture}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "#9a9189", letterSpacing: "0.06em", margin: "0 0 1rem" }}>{d.theme}</p>
                <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Read Devotional →</span>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Coming Soon</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1rem" }}>
            {coming.map((d) => (
              <div key={d.title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "1.5rem", opacity: 0.65 }}>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.35rem" }}>{d.title}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "#c9a84c", margin: "0 0 0.25rem" }}>{d.scripture}</p>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", color: "#9a9189", letterSpacing: "0.06em", margin: 0 }}>{d.theme}</p>
              </div>
            ))}
          </div>

          {/* App callout */}
          <div style={{ background: "#0f1e35", borderRadius: 2, padding: "2.5rem", marginTop: "4rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.5rem" }}>Devotional Discoveries App</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", fontWeight: 600, color: "white", margin: "0 0 0.4rem" }}>50+ Devotionals Available Now</p>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>Access the full devotional library in the app.</p>
            </div>
            <a href="https://devotional-discovery.lovable.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex", whiteSpace: "nowrap" }}>
              Open the App ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
