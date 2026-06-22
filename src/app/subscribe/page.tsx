"use client";
import { useState } from "react";
import Link from "next/link";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/email/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, firstName: name }) });
    setDone(true);
    setLoading(false);
  };

  return (
    <div style={{ background: "#faf7f2", minHeight: "80vh" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Free Weekly Reflections</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Silence the Noise™</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
            A weekly reflection — physician-led, scripture-rooted, and framework-connected. Delivered free to your inbox.
          </p>
        </div>
      </header>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#0f1e35", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <span style={{ color: "#c9a84c", fontSize: "1.5rem" }}>✓</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.75rem" }}>You&apos;re in.</h2>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.8, marginBottom: "2rem" }}>
                Welcome to the community. Your first reflection arrives soon.
              </p>
              <Link href="/articles" className="btn btn-gold">Start Reading →</Link>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="First name (optional)"
                  style={{ padding: "0.85rem 1.25rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", background: "white", outline: "none" }} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
                  style={{ padding: "0.85rem 1.25rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", background: "white", outline: "none" }} />
                <button type="submit" disabled={loading} className="btn btn-gold" style={{ justifyContent: "center" }}>
                  {loading ? "Subscribing…" : "Subscribe — It's Free →"}
                </button>
              </form>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#e4ddd2" }}>
                {[["Weekly","One reflection per week — no more."],["Free","Always. No credit card required."],["Unsubscribe","Any time. One click."]].map(([label, desc]) => (
                  <div key={label} style={{ background: "white", padding: "1.25rem", textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.72rem", color: "#c9a84c", margin: "0 0 0.35rem", letterSpacing: "0.1em" }}>{label}</p>
                    <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.88rem", color: "#6b6256", margin: 0, lineHeight: 1.55 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
