import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createCheckoutSession, createOrRetrieveCustomer } from "@/lib/stripe";
import type { ProductType } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await currentUser();
    if (!user?.emailAddresses?.[0]) return NextResponse.json({ error: "No email" }, { status: 400 });
    const { productType, successUrl, cancelUrl } = await req.json() as { productType: ProductType; successUrl: string; cancelUrl: string };
    const email = user.emailAddresses[0].emailAddress;
    const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
    const customer = await createOrRetrieveCustomer(email, name);
    const session = await createCheckoutSession({ productType, userId, userEmail: email, stripeCustomerId: customer.id, successUrl, cancelUrl });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
