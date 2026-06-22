import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign In | Silence the Noise™" };

export default function LoginPage() {
  return (
    <div style={{ background: "#faf7f2", minHeight: "80vh", display: "flex", alignItems: "center", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 420, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.9rem", letterSpacing: "0.14em", color: "#0f1e35" }}>
            Silence the Noise<sup style={{ fontSize: "0.55em" }}>™</sup>
          </Link>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", fontWeight: 600, color: "#0f1e35", margin: "1.25rem 0 0.5rem" }}>Welcome back.</h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0 }}>Sign in to your account.</p>
        </div>
        <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2.5rem" }}>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", textAlign: "center", lineHeight: 1.75, margin: "0 0 1.75rem" }}>
            Account authentication is managed securely through Clerk. Please ensure your account is set up before signing in.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link href="/membership" className="btn btn-gold" style={{ justifyContent: "center" }}>Create an Account →</Link>
            <Link href="/contact" className="btn btn-outline-dark" style={{ justifyContent: "center" }}>Need Help? Contact Us</Link>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "1.5rem", fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.92rem", color: "#9a9189" }}>
          Don&apos;t have an account? <Link href="/membership" style={{ color: "#c9a84c" }}>Join the community</Link>
        </p>
      </div>
    </div>
  );
}
