import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // In production, integrate with an email service (Resend, SendGrid, EmailJS, etc.)
    // For now, we log and return success. Replace with your preferred email provider.
    console.log("Contact form submission:", data);

    // Example: Resend integration (uncomment and add RESEND_API_KEY to .env.local)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: "jmrashed@gmail.com",
    //   subject: `[Portfolio] ${data.subject}`,
    //   text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
