"use client";
import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, formatCurrency, type ProductType } from "@/types";

export function PricingTable() {
  const [billing, setBilling] = useState<"monthly"|"annual">("monthly");
  const ids: ProductType[] = billing==="monthly" ? ["membership_monthly","course_stn","consultation"] : ["membership_annual","course_stn","consultation"];
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem", border: "1px solid #e4ddd2", borderRadius: 3, overflow: "hidden", width: "fit-content", margin: "0 auto 3rem" }}>
        {(["monthly","annual"] as const).map(b => (
          <button key={b} onClick={() => setBilling(b)} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "0.6rem 1.5rem", border: "none", cursor: "pointer", background: billing===b?"#0f1e35":"white", color: billing===b?"white":"#6b6256", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {b==="monthly" ? "Monthly" : <><span>Annual</span><span style={{ fontSize: "0.55rem", background: "#c9a84c", color: "#0f1e35", padding: "0.1rem 0.4rem", borderRadius: 2, fontWeight: 700 }}>Save 35%</span></>}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
        {ids.map(id => {
          const p = PRODUCTS[id];
          return (
            <div key={id} style={{ background: "white", border: `1px solid ${p.featured?"#c9a84c":"#e4ddd2"}`, borderRadius: 2, padding: "2rem", position: "relative", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: p.featured?"0 8px 40px rgba(201,168,76,0.12)":"none" }}>
              {p.tag && <div style={{ position: "absolute", top: -1, right: "1.5rem", background: "#c9a84c", color: "#0f1e35", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "0 0 3px 3px" }}>{p.tag}</div>}
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.3rem", fontWeight: 600, color: "#0f1e35", margin: 0 }}>{p.name}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.1rem" }}>
                <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "2.25rem", color: "#0f1e35", letterSpacing: "0.03em" }}>{formatCurrency(p.price)}</span>
                {p.interval && <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", color: "#6b6256" }}> / {p.interval}</span>}
              </div>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.95rem", color: "#6b6256", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>{p.description}</p>
              <ul style={{ listStyle: "none", margin: "0.5rem 0", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {p.features.map((f,i) => <li key={i} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.82rem", color: "#0f1e35", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}><span style={{ color: "#c9a84c", fontWeight: 700 }}>✓</span>{f}</li>)}
              </ul>
              <CheckoutButton productType={id} className={p.featured?"btn btn-gold":"btn btn-outline-dark"} style={{ justifyContent: "center", marginTop: "auto" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CheckoutButton({ productType, className="btn btn-gold", style, children }: { productType: ProductType; className?: string; style?: React.CSSProperties; children?: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productType, successUrl: `${window.location.origin}/dashboard?success=true`, cancelUrl: window.location.href }) });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch { alert("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  };
  return <button className={className} style={style} onClick={handle} disabled={loading}>{loading ? "Redirecting…" : (children ?? "Get Started")}</button>;
}

export function MemberGate({ preview, title }: { preview?: React.ReactNode; title?: string }) {
  return (
    <div>
      {preview && <div style={{ position: "relative", maxHeight: 320, overflow: "hidden" }}>{preview}<div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 160, background: "linear-gradient(to bottom,transparent,#faf7f2)", pointerEvents: "none" }} /></div>}
      <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 3, padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p className="label-text" style={{ textAlign: "center" }}>Member Content</p>
          <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.75rem", fontWeight: 600, color: "#0f1e35", marginBottom: "0.75rem" }}>{title ?? "Continue Reading"}</h3>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.5rem" }}>This content is part of the Silence the Noise™ member library. Join to access the full article, plus 50+ devotionals, podcast, videos, and community.</p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/membership" className="btn btn-gold">Join the Community</Link>
            <Link href="/login" className="btn btn-outline-dark">Sign In</Link>
          </div>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "#6b6256", marginTop: "1rem" }}>30-day satisfaction guarantee · Cancel anytime</p>
        </div>
      </div>
    </div>
  );
}

export function JourneyCTA({ heading="Silence the Noise™", subheading="One system. One journey. One framework. One message.", variant="dark" }: { heading?: string; subheading?: string; variant?: "dark"|"light" }) {
  const dark = variant==="dark";
  return (
    <section style={{ background: dark?"#0f1e35":"#f0ebe1", textAlign: "center", padding: "6rem 2rem" }}>
      <h2 style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 400, color: dark?"white":"#0f1e35", letterSpacing: "0.07em", marginBottom: "0.5rem" }}>
        {heading}<sup style={{ fontSize: "0.3em", color: "#c9a84c", verticalAlign: "super" }}>™</sup>
      </h2>
      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: dark?"rgba(255,255,255,0.4)":"#6b6256", marginBottom: "2.5rem" }}>{subheading}</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/journey" className="btn btn-gold">Start the Journey →</Link>
        <Link href="/membership" className={`btn ${dark?"btn-outline-light":"btn-outline-dark"}`}>Join the Community</Link>
      </div>
    </section>
  );
}

export function EmailCapture({ source="homepage" }: { source?: string }) {
  const [email, setEmail] = useState(""); const [done, setDone] = useState(false); const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!email) return; setLoading(true);
    await fetch("/api/email/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, source }) });
    setDone(true); setLoading(false);
  };
  if (done) return <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", color: "#c9a84c", textAlign: "center" }}>Thank you — your first reflection is on its way.</p>;
  return (
    <form onSubmit={submit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required aria-label="Email address" style={{ padding: "0.7rem 1rem", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 2, background: "rgba(255,255,255,0.05)", color: "white", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.82rem", outline: "none", minWidth: 220 }} />
      <button type="submit" disabled={loading} className="btn btn-gold">{loading?"…":"Get Free Reflections"}</button>
    </form>
  );
}
