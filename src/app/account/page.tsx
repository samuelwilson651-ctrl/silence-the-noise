import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Account Settings | Silence the Noise™" };

export default function AccountPage() {
  return (
    <div style={{ background: "#faf7f2", minHeight: "70vh", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>Member Area</p>
        <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 2rem" }}>Account Settings</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e4ddd2" }}>
          {[
            { label:"Dashboard", desc:"Your member home — articles, devotionals, quick links.", href:"/dashboard" },
            { label:"Membership & Billing", desc:"Update your plan, manage billing, or cancel.", href:"/membership" },
            { label:"Email Preferences", desc:"Manage the reflections and updates you receive.", href:"/subscribe" },
            { label:"Contact Support", desc:"Questions about your account? We respond within 3–5 days.", href:"/contact" },
          ].map(item => (
            <Link key={item.label} href={item.href} style={{ background: "white", padding: "1.75rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.2rem", letterSpacing: "0.04em" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.95rem", color: "#6b6256", margin: 0 }}>{item.desc}</p>
              </div>
              <span style={{ color: "#c9a84c", flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
