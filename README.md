# Silence the Noise™ Platform

**Dr. Samuel E. Wilson, MD** · Physician · Author · Educator · Speaker

> *"Many people do not simply need more information. They need less noise."*

A complete Next.js 14 platform for [samuelewilson.org](https://samuelewilson.org) — the digital home of the Silence the Noise™ framework.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Custom Properties |
| CMS | Sanity v3 |
| Auth | Clerk |
| Payments | Stripe |
| Email | Resend |
| Deployment | Vercel |

## Revenue Streams

| Product | Price |
|---|---|
| Monthly Membership | $17/mo |
| Annual Membership | $132/yr |
| Course | $297 |
| Coaching Session | $197 |
| Physician Consultation | $497 |

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/samuelwilson651-ctrl/silence-the-noise.git
cd silence-the-noise

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in all values from Clerk, Stripe, Sanity, Resend

# 4. Create Stripe products
npm run stripe:setup

# 5. Run locally
npm run dev
```

---

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
2. Select `silence-the-noise`
3. Add all environment variables from `.env.example`
4. Deploy

Vercel auto-deploys on every push to `main`.

---

## Environment Variables

See `.env.example` for the full list with instructions.

**Clerk** — [dashboard.clerk.com](https://dashboard.clerk.com)  
**Stripe** — [dashboard.stripe.com](https://dashboard.stripe.com)  
**Sanity** — [sanity.io](https://sanity.io)  
**Resend** — [resend.com](https://resend.com)

---

## Site Architecture

```
/                    Homepage
/framework           Seven Pillars overview
/journey             Interactive 7-step path
/anxiety             Topic hub
/depression          Topic hub
/ptsd                Topic hub
/faith               Topic hub
/body                Topic hub
/purpose             Topic hub
/articles            Article library
/articles/[slug]     Individual articles
/devotionals         Devotional library
/devotionals/[slug]  Individual devotionals
/podcast             Episode library
/videos              Video series
/resources           Resource library
/speaking            Speaking page
/about               About Dr. Wilson
/membership          Pricing page
/course              Course landing
/dashboard           Member dashboard (auth-gated)
/api/stripe/checkout Stripe checkout session
/api/stripe/portal   Stripe customer portal
/api/webhooks/stripe Payment event handler
/api/email/subscribe Newsletter signup
```

---

*© 2026 Samuel E. Wilson, MD · Silence the Noise™*
