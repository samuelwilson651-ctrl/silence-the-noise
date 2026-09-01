
"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { ProductType } from "@/types";

const VALID_PRODUCTS: ProductType[] = [
  "membership_monthly",
  "membership_annual",
  "course_stn",
  "coaching_session",
  "consultation",
];

function CheckoutRedirectInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const productType = searchParams.get("product") as ProductType | null;

  useEffect(() => {
    if (!productType || !VALID_PRODUCTS.includes(productType)) {
      router.replace("/membership");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productType,
            successUrl: `${window.location.origin}/dashboard?success=true`,
            cancelUrl: `${window.location.origin}/membership`,
          }),
        });
        const data = await res.json().catch(() => ({}));

        if (res.status === 401) {
          // Session isn't ready yet — send them to sign in and try again.
          router.replace(`/login?product=${encodeURIComponent(productType)}`);
          return;
        }
        if (!res.ok || !data.url) {
          if (!cancelled) setError(data.error || "We couldn't start checkout. Please try again from the pricing page.");
          return;
        }
        window.location.href = data.url;
      } catch {
        if (!cancelled) setError("Something went wrong. Please try again from the pricing page.");
      }
    })();

    return () => { cancelled = true; };
  }, [productType, router]);

  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#faf7f2", padding: "4rem 2rem" }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        {error ? (
          <>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", color: "#0f1e35", marginBottom: "1.5rem" }}>{error}</p>
            <a href="/membership" className="btn btn-gold">Back to Pricing</a>
          </>
        ) : (
          <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256" }}>
            Setting up your checkout…
          </p>
        )}
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#faf7f2", padding: "4rem 2rem" }}>
      <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "1.1rem", color: "#6b6256" }}>
        Setting up your checkout…
      </p>
    </div>
  );
}

export default function CheckoutRedirectPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CheckoutRedirectInner />
    </Suspense>
  );
}
