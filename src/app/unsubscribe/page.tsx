"use client";
import { useState } from "react";
import Link from "next/link";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Call unsubscribe API
    await fetch("/api/email/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setDone(true);
    setLoading(false);
  };

  return (
    <div style={{ background: "#faf7f2", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Email Preferences</p>

        {done ? (
          <>
            <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 1rem" }}>You have been unsubscribed.</h1>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.8, margin: "0 0 2rem" }}>
              We are sorry to see you go. You will no longer receive marketing emails from Silence the Noise™. Transactional emails related to your account or purchases will continue.
            </p>
            <Link href="/" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#0f1e35", color: "white", display: "inline-flex" }}>
              Return Home
            </Link>
          </>
        ) : (
          <>
            <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.75rem" }}>Unsubscribe</h1>
            <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.05rem", color: "#6b6256", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Enter your email address below to unsubscribe from Silence the Noise™ reflections and newsletters.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{ padding: "0.85rem 1.25rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.9rem", background: "white", outline: "none", textAlign: "center" }}
              />
              <button type="submit" disabled={loading} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, background: "#0f1e35", color: "white", border: "none", cursor: "pointer" }}>
                {loading ? "Processing…" : "Unsubscribe"}
              </button>
            </form>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "#9a9189", margin: "1.5rem 0 0" }}>
              Changed your mind? <Link href="/subscribe" style={{ color: "#c9a84c" }}>Re-subscribe here.</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
