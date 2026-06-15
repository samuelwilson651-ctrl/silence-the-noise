#!/usr/bin/env tsx
/**
 * Silence the Noise™ — Stripe Product Setup
 * Run: npm run stripe:setup
 * Creates all products in Stripe and prints the price IDs to add to .env.local
 */
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-02-24.acacia" });

async function setup() {
  console.log("Setting up Stripe products for Silence the Noise™...\n");
  const results: Record<string,string> = {};
  const mp = await stripe.products.create({ name: "Silence the Noise™ Community Membership", metadata: { type:"membership" } });
  results["STRIPE_PRICE_MEMBERSHIP_MONTHLY"] = (await stripe.prices.create({ product:mp.id, currency:"usd", unit_amount:1700, recurring:{interval:"month"}, nickname:"Monthly" })).id;
  results["STRIPE_PRICE_MEMBERSHIP_ANNUAL"]  = (await stripe.prices.create({ product:mp.id, currency:"usd", unit_amount:13200, recurring:{interval:"year"},  nickname:"Annual" })).id;
  const cp = await stripe.products.create({ name: "Silence the Noise™ Course", metadata: { type:"course" } });
  results["STRIPE_PRICE_COURSE_STN"] = (await stripe.prices.create({ product:cp.id, currency:"usd", unit_amount:29700, nickname:"STN Course" })).id;
  const kp = await stripe.products.create({ name: "Coaching Session", metadata: { type:"coaching" } });
  results["STRIPE_PRICE_COACHING_SESSION"] = (await stripe.prices.create({ product:kp.id, currency:"usd", unit_amount:19700, nickname:"Coaching" })).id;
  const xp = await stripe.products.create({ name: "Physician Consultation — Dr. Wilson", metadata: { type:"consultation" } });
  results["STRIPE_PRICE_CONSULTATION"] = (await stripe.prices.create({ product:xp.id, currency:"usd", unit_amount:49700, nickname:"Consultation" })).id;
  console.log("Add these to your .env.local:\n");
  Object.entries(results).forEach(([k,v]) => console.log(`${k}=${v}`));
}
setup().catch(console.error);
