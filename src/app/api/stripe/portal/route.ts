import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createPortalSession } from "@/lib/stripe";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelewilson.org").replace(/\/+$/, "");

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Only ever open the billing portal for the signed-in user's own Stripe
    // customer. Never trust a customer ID sent by the browser.
    const user = await currentUser();
    const customerId = user?.privateMetadata?.stripeCustomerId;
    if (typeof customerId !== "string" || !customerId) {
      return NextResponse.json({ error: "No billing account found" }, { status: 400 });
    }

    const session = await createPortalSession(customerId, `${SITE_URL}/dashboard`);
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Portal error:", err);
    return NextResponse.json({ error: "Portal failed" }, { status: 500 });
  }
}
