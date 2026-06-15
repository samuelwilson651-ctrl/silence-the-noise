import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { constructWebhookEvent } from "@/lib/stripe";
import { sendMembershipWelcome, sendCourseAccessEmail, sendConsultationConfirmation } from "@/lib/email";
import { clerkClient } from "@clerk/nextjs/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.arrayBuffer();
  const sig = (await headers()).get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "No signature" }, { status: 400 });

  let event: Stripe.Event;
  try { event = constructWebhookEvent(Buffer.from(body), sig); }
  catch { return NextResponse.json({ error: "Invalid signature" }, { status: 400 }); }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { userId, productType } = session.metadata ?? {};
    const email = session.customer_details?.email ?? "";
    const name = (session.customer_details?.name ?? "").split(" ")[0] || "Friend";
    if (userId) {
      const client = await clerkClient();
      await client.users.updateUserMetadata(userId, { privateMetadata: { stripeCustomerId: session.customer } });
      if (productType?.startsWith("membership")) await sendMembershipWelcome(email, name, productType.includes("annual")?"Annual":"Monthly");
      else if (productType==="course_stn") await sendCourseAccessEmail(email, name);
      else if (productType==="consultation") await sendConsultationConfirmation(email, name);
    }
  }
  return NextResponse.json({ received: true });
}
