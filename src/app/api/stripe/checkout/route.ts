import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { createCheckoutSession, createOrRetrieveCustomer } from "@/lib/stripe";
import { sameSiteUrl } from "@/lib/security";

const schema = z.object({
  productType: z.enum(["membership_monthly", "membership_annual", "course_stn", "coaching_session", "consultation"]),
  successUrl: z.string().max(2000).optional(),
  cancelUrl: z.string().max(2000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await currentUser();
    if (!user?.emailAddresses?.[0]) return NextResponse.json({ error: "No email" }, { status: 400 });

    const parsed = schema.safeParse(await req.json().catch(() => null));
    if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    const { productType } = parsed.data;

    // Only allow Stripe to send people back to our own site.
    const successUrl = sameSiteUrl(parsed.data.successUrl, "/dashboard?success=true");
    const cancelUrl = sameSiteUrl(parsed.data.cancelUrl, "/membership");

    const primary = user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId) ?? user.emailAddresses[0];
    const email = primary.emailAddress;
    const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
    const existingCustomerId = user.privateMetadata?.stripeCustomerId;
    const customerId =
      typeof existingCustomerId === "string" && existingCustomerId
        ? existingCustomerId
        : (await createOrRetrieveCustomer(email, name)).id;

    const session = await createCheckoutSession({ productType, userId, userEmail: email, stripeCustomerId: customerId, successUrl, cancelUrl });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
