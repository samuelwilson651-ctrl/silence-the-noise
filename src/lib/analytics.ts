"use client";
declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", name, params);
}

export const events = {
  journeyStarted:      ()                       => trackEvent("journey_started"),
  pillarViewed:        (pillar: string)          => trackEvent("pillar_viewed", { pillar }),
  articleRead:         (slug: string, cat: string) => trackEvent("article_read", { slug, category: cat }),
  checkoutStarted:     (product: string)         => trackEvent("checkout_started", { product }),
  memberSignup:        (plan: string)            => trackEvent("member_signup", { plan }),
  newsletterSignup:    (source: string)          => trackEvent("newsletter_signup", { source }),
  contentGated:        (slug: string)            => trackEvent("content_gated", { slug }),
};
