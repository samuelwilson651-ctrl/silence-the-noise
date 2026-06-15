import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Silence the Noise™",
  description: "Privacy Policy for samuelewilson.org and the Silence the Noise™ platform.",
};

export default function PrivacyPage() {
  const sections = [
    { title: "Information We Collect", body: "We collect information you provide directly — such as your name, email address, and payment information when you subscribe, purchase a course, or register for an account. We also collect information automatically through your use of the site, including pages visited, time spent, and general location data." },
    { title: "How We Use Your Information", body: "We use your information to deliver the services you have requested, send you content you have subscribed to, process payments securely through Stripe, send transactional emails through Resend, improve the platform, and communicate with you about your account or purchases." },
    { title: "Email Communications", body: "When you subscribe to free reflections or create an account, you may receive emails from Dr. Samuel E. Wilson including weekly reflections, framework updates, and service communications. You may unsubscribe at any time by clicking the unsubscribe link in any email or visiting samuelewilson.org/unsubscribe." },
    { title: "Payment Information", body: "All payment processing is handled by Stripe, a PCI-compliant payment processor. We do not store your credit card number or full payment details on our servers. For details on how Stripe handles your data, visit stripe.com/privacy." },
    { title: "Data Sharing", body: "We do not sell your personal information. We share data only with service providers necessary to operate this platform — including Clerk (authentication), Stripe (payments), Resend (email), Sanity (content), and Vercel (hosting). Each provider is bound by their own privacy policies." },
    { title: "Cookies", body: "We use cookies to maintain your session, remember your preferences, and analyze site usage. Authentication cookies are required for login to work. Analytics cookies are used to understand how visitors use the site. You may disable cookies in your browser settings." },
    { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data at any time. To request access to or deletion of your data, contact us at contact@samuelewilson.org. We will respond within 30 days." },
    { title: "Children's Privacy", body: "This platform is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13." },
    { title: "Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on this site. Your continued use of the site after changes constitutes acceptance of the updated policy." },
    { title: "Contact", body: "If you have questions about this Privacy Policy, please contact us at contact@samuelewilson.org or through the contact form at samuelewilson.org/contact." },
  ];

  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "white", margin: "0 0 0.75rem" }}>Privacy Policy</h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>Last updated: June 2026 · samuelewilson.org</p>
        </div>
      </header>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", color: "#4a4040", lineHeight: 1.85, borderLeft: "3px solid #c9a84c", paddingLeft: "1.25rem", marginBottom: "3rem" }}>
          Dr. Samuel E. Wilson, MD operates samuelewilson.org and the Silence the Noise™ platform. This policy explains how we collect, use, and protect your information.
        </p>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid #e4ddd2" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.35rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.75rem" }}>{s.title}</h2>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#4a4040", lineHeight: 1.85, margin: 0 }}>{s.body}</p>
          </div>
        ))}
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/terms" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Terms of Service →</Link>
          <Link href="/contact" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6256" }}>Contact Us →</Link>
        </div>
      </div>
    </div>
  );
}
