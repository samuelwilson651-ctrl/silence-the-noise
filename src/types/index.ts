// ── Framework ──────────────────────────────────────────────────
export type Pillar =
  | "awareness" | "surrender" | "identity" | "discipline"
  | "renewal"   | "compassion" | "integration";

export type TopicCategory =
  | "anxiety" | "depression" | "ptsd" | "faith" | "body" | "purpose";

export const PILLARS: Record<Pillar, { number: number; title: string; tagline: string }> = {
  awareness:   { number: 1, title: "Awareness",             tagline: "Recognize the noise before it controls you." },
  surrender:   { number: 2, title: "Surrender",             tagline: "Release what was never yours to carry." },
  identity:    { number: 3, title: "Identity",              tagline: "You are not your diagnosis, your trauma, or your past." },
  discipline:  { number: 4, title: "Discipline",            tagline: "Small daily actions create transformation." },
  renewal:     { number: 5, title: "Renewal Under Pressure",tagline: "Storms reveal foundations — and become places of growth." },
  compassion:  { number: 6, title: "Compassion",            tagline: "Healing rarely happens in isolation." },
  integration: { number: 7, title: "Integration",           tagline: "Mind, body, spirit, purpose, and relationships aligned." },
};

export const TOPICS: Record<TopicCategory, { title: string; icon: string; description: string; pillars: Pillar[] }> = {
  anxiety:    { title: "Anxiety",                   icon: "🌀", description: "Fear of tomorrow, the cost of uncertainty, and the path to peace.",        pillars: ["awareness","surrender"] },
  depression: { title: "Depression",                icon: "🌧", description: "When the soul grows tired — and the path back to hope.",                   pillars: ["surrender","compassion"] },
  ptsd:       { title: "PTSD & Trauma",             icon: "🧩", description: "Trauma is not a life sentence. Integration is possible.",                  pillars: ["identity","integration"] },
  faith:      { title: "Faith & Spiritual Renewal", icon: "✝",  description: "Hearing the gentle whisper when the world is shouting.",                   pillars: ["surrender","identity"] },
  body:       { title: "Body, Nutrition & Healing", icon: "🌿", description: "Stewardship of the whole person — body, brain, and spirit.",               pillars: ["discipline"] },
  purpose:    { title: "Purpose",                   icon: "🧭", description: "From survival mode into the life you were created to live.",               pillars: ["integration"] },
};

// ── Monetization ───────────────────────────────────────────────
export type ProductType =
  | "membership_monthly" | "membership_annual"
  | "course_stn" | "coaching_session" | "consultation";

export interface Product {
  id: ProductType;
  name: string;
  description: string;
  price: number;
  interval?: "month" | "year";
  features: string[];
  featured?: boolean;
  tag?: string;
}

export const PRODUCTS: Record<ProductType, Product> = {
  membership_monthly: {
    id: "membership_monthly", name: "Community Membership", tag: "Most Popular", featured: true,
    description: "Full access to the Silence the Noise™ member library.",
    price: 1700, interval: "month",
    features: ["All member-only articles & devotionals","Full podcast & video library","Resource library (PDFs, guides)","Community discussion boards","Monthly live Q&A with Dr. Wilson","7-Day Reset Protocol"],
  },
  membership_annual: {
    id: "membership_annual", name: "Annual Membership", tag: "Best Value",
    description: "Everything in monthly — save 35% annually.",
    price: 13200, interval: "year",
    features: ["Everything in monthly membership","Save 35% vs monthly","Priority access to new content","Annual framework review session"],
  },
  course_stn: {
    id: "course_stn", name: "Silence the Noise™ Course",
    description: "Seven-module structured journey through the complete framework.",
    price: 29700,
    features: ["7 in-depth video modules","Workbooks for each pillar","Lifetime access","Private course community","Certificate of completion"],
  },
  coaching_session: {
    id: "coaching_session", name: "Coaching Session",
    description: "One 60-minute session with a certified STN coach.",
    price: 19700,
    features: ["60-minute video session","Pre-session intake","Session recording","Follow-up resources"],
  },
  consultation: {
    id: "consultation", name: "Physician Consultation",
    description: "One-on-one time with Dr. Samuel E. Wilson, MD.",
    price: 49700,
    features: ["45-minute consultation with Dr. Wilson","Personalized framework assessment","Written recommendations","Priority email follow-up (30 days)"],
  },
};

export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(cents / 100);
}

// ── Content ────────────────────────────────────────────────────
export interface Article {
  _id: string; title: string; slug: { current: string };
  excerpt: string; body: Block[]; coverImage?: SanityImage;
  author: { name: string; credentials: string };
  publishedAt: string; category: TopicCategory; pillars: Pillar[];
  tags: string[]; featured: boolean; memberOnly: boolean; readingTime: number;
}

export interface Devotional {
  _id: string; title: string; slug: { current: string };
  scripture: string; scriptureReference: string;
  reflection: Block[]; prayer: string; coverImage?: SanityImage;
  publishedAt: string; category: TopicCategory; pillars: Pillar[];
  theme: string; memberOnly: boolean;
}

export interface SanityImage { asset: { _ref: string }; alt?: string; }
export interface Block { _type: string; _key: string; children?: { _key: string; _type: string; text?: string }[]; style?: string; }
