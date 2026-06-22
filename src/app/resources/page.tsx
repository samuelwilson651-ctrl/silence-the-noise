import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Silence the Noise™",
  description: "The complete Silence the Noise™ resource library — articles, devotionals, tools, guides, and more. Dr. Samuel E. Wilson, MD.",
};

const free = [
  { title:"Free Weekly Reflections",desc:"Physician-led reflections delivered to your inbox — each one tagged to a framework pillar.",href:"/subscribe",cta:"Subscribe Free" },
  { title:"Devotional Discoveries App",desc:"50+ scripture-rooted devotionals organized by theme and pillar. Free to access.",href:"https://devotional-discovery.lovable.app",cta:"Open App ↗",external:true },
  { title:"Article Library",desc:"All published articles on anxiety, depression, PTSD, faith, body, and purpose — free to read.",href:"/articles",cta:"Browse Articles" },
];

const member = [
  { title:"Full Video Library",desc:"5 teaching series — 19 episodes total. New series added regularly.",href:"/videos" },
  { title:"Complete Podcast Archive",desc:"The Whole Person Podcast — all episodes plus transcript access.",href:"/podcast" },
  { title:"Resource Library",desc:"PDFs, guides, worksheets, and the 7-Day Neuro-Spiritual Reset Protocol.",href:"/membership" },
  { title:"Community Access",desc:"Discussion boards, accountability partners, and shared journey.",href:"/membership" },
  { title:"Monthly Live Q&A",desc:"Submit questions and join Dr. Wilson live each month.",href:"/membership" },
];

const products = [
  { title:"Silence the Noise™ Course",price:"$297",desc:"7-module structured journey through the complete framework. Workbooks, video, and lifetime access.",href:"/course",cta:"Learn More" },
  { title:"Coaching Session",price:"$197",desc:"60-minute session with a certified Silence the Noise™ coach.",href:"/contact",cta:"Book Session" },
  { title:"Physician Consultation",price:"$497",desc:"45 minutes with Dr. Wilson directly — personalized assessment and written recommendations.",href:"/contact",cta:"Request Consultation" },
  { title:"Speaking & Workshops",price:"Custom",desc:"Keynotes, half-day workshops, and full-day retreats for your organization.",href:"/speaking",cta:"Inquire" },
];

export default function ResourcesPage() {
  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Resource Library</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Everything in the Framework</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
            Every resource in the Silence the Noise™ framework — organized by access level and type. Start free. Go deeper when you&rsquo;re ready.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Free */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>✓ Free — No Account Required</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {free.map(r => (
              <div key={r.title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <span style={{ display: "inline-block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#15803d", background: "rgba(34,197,94,0.1)", padding: "0.2rem 0.6rem", borderRadius: 2, marginBottom: "0.85rem", width: "fit-content" }}>Free</span>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.15rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: "0 0 1.25rem", flex: 1 }}>{r.desc}</p>
                {r.external ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ justifyContent: "center" }}>{r.cta}</a>
                ) : (
                  <Link href={r.href} className="btn btn-gold" style={{ justifyContent: "center" }}>{r.cta}</Link>
                )}
              </div>
            ))}
          </div>

          {/* Member */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>👥 Member Access — $17/month</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1px", background: "#e4ddd2", marginBottom: "1.25rem" }}>
            {member.map(r => (
              <div key={r.title} style={{ background: "white", padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.4rem" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/membership" className="btn btn-gold" style={{ marginBottom: "4rem", display: "inline-flex" }}>Join the Community →</Link>

          {/* Products */}
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>🎓 Individual Products</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem" }}>
            {products.map(r => (
              <div key={r.title} style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "1rem", color: "#c9a84c" }}>{r.price}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.5rem" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", lineHeight: 1.7, margin: "0 0 1.25rem", flex: 1 }}>{r.desc}</p>
                <Link href={r.href} className="btn btn-outline-dark" style={{ justifyContent: "center" }}>{r.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
