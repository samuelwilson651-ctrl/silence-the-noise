import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Silence the Noise™",
  description: "Terms of Service for samuelewilson.org and the Silence the Noise™ platform.",
};

export default function TermsPage() {
  const sections = [
    { title: "Acceptance of Terms", body: "By accessing or using samuelewilson.org and the Silence the Noise™ platform, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site." },
    { title: "Not Medical Advice", body: "The content on this platform — including articles, devotionals, podcast episodes, videos, courses, and all written materials — is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified mental health professional with any questions you may have regarding a medical or psychological condition. Never disregard professional medical advice or delay in seeking it because of something you have read or heard on this platform." },
    { title: "Membership and Subscriptions", body: "Membership subscriptions are billed monthly or annually as selected at purchase. Your membership will automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel at any time from your dashboard. Cancellation takes effect at the end of the current billing period — you retain access until then." },
    { title: "Refund Policy", body: "If you are not satisfied with your membership or course purchase within 30 days of your first payment, contact us at contact@samuelewilson.org for a full refund. No questions asked. After 30 days, refunds are issued at our discretion." },
    { title: "Course Access", body: "Upon purchase of the Silence the Noise™ Course, you receive lifetime access to the course materials as they exist at the time of purchase. We reserve the right to update, revise, or expand course content. Lifetime access means access for as long as this platform operates." },
    { title: "Intellectual Property", body: "All content on this platform — including but not limited to the Silence the Noise™ framework, written articles, devotionals, audio recordings, video content, and course materials — is the intellectual property of Dr. Samuel E. Wilson, MD. You may not reproduce, distribute, or create derivative works from this content without express written permission." },
    { title: "User Conduct", body: "You agree to use this platform only for lawful purposes. You may not share your account credentials, reproduce member-only content, or use this platform to harass, harm, or deceive others." },
    { title: "Disclaimer of Warranties", body: "This platform is provided as is without warranties of any kind, express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of harmful components." },
    { title: "Limitation of Liability", body: "To the fullest extent permitted by law, Dr. Samuel E. Wilson, MD and the Silence the Noise™ platform shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this platform." },
    { title: "Changes to Terms", body: "We may update these Terms of Service at any time. We will notify you of significant changes by email or by posting a notice on this site. Your continued use after changes constitutes acceptance of the updated terms." },
    { title: "Governing Law", body: "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions." },
    { title: "Contact", body: "Questions about these Terms of Service? Contact us at contact@samuelewilson.org or through the contact form at samuelewilson.org/contact." },
  ];

  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "white", margin: "0 0 0.75rem" }}>Terms of Service</h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>Last updated: June 2026 · samuelewilson.org</p>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ background: "#0f1e35", borderLeft: "3px solid #c9a84c", padding: "1.5rem 1.75rem", marginBottom: "3rem", borderRadius: "0 2px 2px 0" }}>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#c9a84c", fontStyle: "normal" }}>Important:</strong> The content on this platform is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical decisions.
          </p>
        </div>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid #e4ddd2" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.35rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.75rem" }}>{s.title}</h2>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#4a4040", lineHeight: 1.85, margin: 0 }}>{s.body}</p>
          </div>
        ))}
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Privacy Policy →</Link>
          <Link href="/contact" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256" }}>Contact Us →</Link>
        </div>
      </div>
    </div>
  );
}
