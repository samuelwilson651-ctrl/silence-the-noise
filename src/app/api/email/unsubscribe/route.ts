import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(req: NextRequest) {
  try {
    const { email } = schema.parse(await req.json());
    // Remove from Resend audience if configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_NEWSLETTER) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      // Find contact and delete
      const contacts = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_NEWSLETTER });
      const contact = contacts.data?.data?.find((c: { email: string }) => c.email === email);
      if (contact?.id) {
        await resend.contacts.remove({ id: contact.id, audienceId: process.env.RESEND_AUDIENCE_NEWSLETTER });
      }
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
