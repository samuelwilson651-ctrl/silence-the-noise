import type { Metadata } from "next";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = { title: "Sign In | Silence the Noise™" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; redirect?: string }>;
}) {
  const params = await searchParams;

  // Priority: an explicit ?redirect= target (used by requireAuth/requireMembership),
  // then a ?product= handoff from a "Get Started" button, then the dashboard.
  const redirectUrl = params.redirect
    ? params.redirect
    : params.product
    ? `/checkout-redirect?product=${encodeURIComponent(params.product)}`
    : "/dashboard";

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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/signup"
            forceRedirectUrl={redirectUrl}
            fallbackRedirectUrl={redirectUrl}
          />
        </div>
      </div>
    </div>
  );
}
