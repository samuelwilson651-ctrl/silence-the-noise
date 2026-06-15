import { NextRequest, NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/email";
import { z } from "zod";

const schema = z.object({ email: z.string().email(), firstName: z.string().optional(), source: z.string().default("homepage") });

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, source } = schema.parse(await req.json());
    void source;
    await subscribeToNewsletter(email, firstName);
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
