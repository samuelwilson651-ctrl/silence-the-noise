import type { Metadata } from "next";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = { title: "Create Account | Silence the Noise™" };

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  const product = params.product;

  // If the visitor arrived from a "Get Started" button (e.g. /signup?product=course_stn),
  // send them straight into checkout for that product right after they create their account.
  // Otherwise land on the dashboard like a normal new member.
  const redirectUrl = product
    ? `/checkout-redirect?product=${encodeURIComponent(product)}`
    : "/dashboard?success=true";

  return (
    <div style={{ background: "#faf7f2", minHeight: "80vh", display: "flex", alignItems: "center", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 420, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.9rem", letterSpacing: "0.14em", color: "#0f1e35" }}>
            Silence the Noise<sup style={{ fontSize: "0.55em" }}>™</sup>
          </Link>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", fontWeight: 600, color: "#0f1e35", margin: "1.25rem 0 0.5rem" }}>Join the Community</h1>
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1rem", color: "#6b6256", margin: 0 }}>One system. One journey. One message.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <SignUp
            path="/signup"
            routing="path"
            signInUrl="/login"
            forceRedirectUrl={redirectUrl}
            fallbackRedirectUrl={redirectUrl}
          />
        </div>
      </div>
    </div>
  );
}
