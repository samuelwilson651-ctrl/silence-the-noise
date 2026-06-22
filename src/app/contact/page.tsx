"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"general", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In production: POST to /api/email/contact
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  const input = (field: string, label: string, type = "text", placeholder = "") => (
    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{ display: "block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f1e35", marginBottom: "0.4rem" }}>{label}</label>
      <input type={type} value={(form as Record<string,string>)[field]} onChange={e => setForm(p => ({...p,[field]:e.target.value}))} placeholder={placeholder} required
        style={{ width: "100%", padding: "0.85rem 1rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", background: "white", outline: "none", color: "#0f1e35" }} />
    </div>
  );

  return (
    <div style={{ background: "#faf7f2" }}>
      <header style={{ background: "#0f1e35", padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Get in Touch</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, color: "white", lineHeight: 1.15, margin: "0 0 1.25rem" }}>Contact</h1>
          <div style={{ width: 44, height: 2, background: "#c9a84c", margin: "0 0 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
            Questions about the framework, speaking inquiries, media requests, or anything else — we read every message and respond within 3–5 business days.
          </p>
        </div>
      </header>

      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#0f1e35", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <span style={{ color: "#c9a84c", fontSize: "1.5rem" }}>✓</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 0.75rem" }}>Message received.</h2>
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256", lineHeight: 1.8, marginBottom: "2rem" }}>We&apos;ll be in touch within 3–5 business days.</p>
              <Link href="/" className="btn btn-gold">Return Home →</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {input("name","Your Name","text","Dr. Jane Smith")}
              {input("email","Email Address","email","your@email.com")}
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f1e35", marginBottom: "0.4rem" }}>Subject</label>
                <select value={form.subject} onChange={e => setForm(p => ({...p, subject: e.target.value}))}
                  style={{ width: "100%", padding: "0.85rem 1rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", background: "white", outline: "none", color: "#0f1e35" }}>
                  <option value="general">General Inquiry</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="media">Media Request</option>
                  <option value="consultation">Consultation</option>
                  <option value="membership">Membership Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: "1.75rem" }}>
                <label style={{ display: "block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f1e35", marginBottom: "0.4rem" }}>Message</label>
                <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} required rows={6}
                  style={{ width: "100%", padding: "0.85rem 1rem", border: "1px solid #e4ddd2", borderRadius: 2, fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", background: "white", outline: "none", color: "#0f1e35", resize: "vertical" }} />
              </div>
              <button type="submit" disabled={loading} className="btn btn-gold" style={{ fontSize: "0.82rem", padding: "1rem 2.5rem" }}>
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}

          <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.5rem" }}>
            {[{ label:"Speaking Inquiries",desc:"Keynotes, workshops, retreats, and conferences.",href:"/speaking" },{ label:"Membership Support",desc:"Questions about your account or subscription.",href:"/membership" },{ label:"Media & Press",desc:"Interview requests and media inquiries.",href:"/contact" }].map(item => (
              <div key={item.label}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.35rem" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.65, margin: "0 0 0.4rem" }}>{item.desc}</p>
                <Link href={item.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
