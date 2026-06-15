import Stripe from "stripe";
import type { ProductType } from "@/types";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key, { apiVersion: "2025-02-24.acacia", typescript: true });
}

export function getStripePriceId(productType: ProductType): string {
  const map: Record<ProductType, string | undefined> = {
    membership_monthly: process.env.STRIPE_PRICE_MEMBERSHIP_MONTHLY,
    membership_annual:  process.env.STRIPE_PRICE_MEMBERSHIP_ANNUAL,
    course_stn:         process.env.STRIPE_PRICE_COURSE_STN,
    coaching_session:   process.env.STRIPE_PRICE_COACHING_SESSION,
    consultation:       process.env.STRIPE_PRICE_CONSULTATION,
  };
  const id = map[productType];
  if (!id) throw new Error(`Missing Stripe price ID for: ${productType}`);
  return id;
}

export async function createCheckoutSession(params: {
  productType: ProductType; userId: string; userEmail: string;
  stripeCustomerId?: string; successUrl: string; cancelUrl: string;
}) {
  const stripe = getStripe();
  const { productType, userId, userEmail, stripeCustomerId, successUrl, cancelUrl } = params;
  const { PRODUCTS } = await import("@/types");
  const product = PRODUCTS[productType];
  const priceId = getStripePriceId(productType);
  const isSubscription = !!product.interval;

  return stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    customer: stripeCustomerId,
    customer_email: stripeCustomerId ? undefined : userEmail,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: cancelUrl,
    metadata: { userId, productType },
    allow_promotion_codes: true,
    ...(isSubscription ? { subscription_data: { metadata: { userId, productType } } } : {}),
    ...(!isSubscription ? { payment_intent_data: { metadata: { userId, productType } } } : {}),
  });
}

export async function createPortalSession(stripeCustomerId: string, returnUrl: string) {
  const stripe = getStripe();
  return stripe.billingPortal.sessions.create({ customer: stripeCustomerId, return_url: returnUrl });
}

export async function createOrRetrieveCustomer(email: string, name?: string) {
  const stripe = getStripe();
  const existing = await stripe.customers.list({ email, limit: 1 });
  if (existing.data.length > 0) return existing.data[0];
  return stripe.customers.create({ email, name, metadata: { source: "silence-the-noise" } });
}

export async function hasActiveMembership(stripeCustomerId?: string): Promise<boolean> {
  if (!stripeCustomerId) return false;
  const stripe = getStripe();
  const subs = await stripe.subscriptions.list({ customer: stripeCustomerId, status: "active", limit: 1 });
  return subs.data.length > 0;
}

export function constructWebhookEvent(payload: Buffer, signature: string) {
  const stripe = getStripe();
  return stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET!);
}
