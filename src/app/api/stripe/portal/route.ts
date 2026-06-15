import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createPortalSession } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const formData = await req.formData();
    const customerId = formData.get("customerId") as string;
    if (!customerId) return NextResponse.json({ error: "No customer ID" }, { status: 400 });
    const origin = req.headers.get("origin") ?? "https://samuelewilson.org";
    const session = await createPortalSession(customerId, `${origin}/dashboard`);
    return NextResponse.redirect(session.url);
  } catch (err) {
    console.error("Portal error:", err);
    return NextResponse.json({ error: "Portal failed" }, { status: 500 });
  }
}
