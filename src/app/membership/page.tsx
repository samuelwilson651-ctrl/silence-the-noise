import type { Metadata } from "next";
import Link from "next/link";
import { PricingTable } from "@/components/monetization";

export const metadata: Metadata = { title: "Join the Community", description: "Join the Silence the Noise™ community — full access to articles, devotionals, podcast, courses, and more." };

export default function MembershipPage() {
  const faqs = [["Is there a free trial?","New members receive a 7-day free trial on the monthly plan. Cancel anytime before the trial ends."],["Can I cancel anytime?","Yes. Cancel from your dashboard at any time. You retain access through the end of your billing period."],["Is the course included?","The course is a separate one-time purchase. Membership includes the full content library, community, and monthly Q&A."],["What is your refund policy?","If you are not satisfied within 30 days, contact us for a full refund — no questions asked."],["Is this content faith-based?","Yes — and intentionally so. The framework integrates Christian scripture with clinical neuroscience."]];
  return (
    <div style={{ background: "#faf7f2" }}>
      <section style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div className="container-narrow">
          <p className="label-text" style={{ color: "#c9a84c", textAlign: "center" }}>Community Membership</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.2 }}>Join the Silence the Noise™ Community</h1>
          <div className="gold-rule gold-rule-center" />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>Full access to the physician-led, faith-centered library — articles, devotionals, podcast, video series, resources, and community.</p>
        </div>
      </section>
      <section className="section-pad"><div className="container-site"><PricingTable /></div></section>
      <section style={{ background: "#0f1e35", padding: "6rem 2rem" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="label-text" style={{ color: "#c9a84c", textAlign: "center" }}>What&apos;s Included</p>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "white", margin: 0 }}>Everything in the Framework</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 1, background: "rgba(201,168,76,0.08)" }}>
            {[["📄","Full Article Library","Every article organized by topic and pillar"],["✝","50+ Devotionals","Scripture · Reflection · Prayer"],["🎙","Complete Podcast","All episodes of The Whole Person Podcast"],["🎬","Video Series","All teaching series, future series included"],["📚","Resource Library","PDFs, guides, worksheets, 7-Day Reset Protocol"],["👥","Community","Discussion boards, accountability, shared journey"],["🎤","Monthly Q&A","Live session with Dr. Wilson"],["📱","Devotional App","Full access to all app content"]].map(([icon,title,desc]) => (
              <div key={title} style={{ background: "#1a2e4a", padding: "2rem 1.75rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "white", marginBottom: "0.35rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-narrow">
          <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", textAlign: "center", marginBottom: "3rem" }}>Questions</h2>
          {faqs.map(([q,a]) => (
            <details key={q} style={{ borderBottom: "1px solid #e4ddd2" }}>
              <summary style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", padding: "1.25rem 0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between" }}>{q}<span style={{ color: "#c9a84c" }}>+</span></summary>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", color: "#6b6256", lineHeight: 1.8, paddingBottom: "1.25rem", fontStyle: "italic", margin: 0 }}>{a}</p>
            </details>
          ))}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn-outline-dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
