import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// אנחנו משתמשים במשתנה סביבה כדי לשמור על אבטחה
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // שליחת האימייל אליך
    await resend.emails.send({
      from: 'Superformance Form <onboarding@resend.dev>',
      to: 'info@superformance.agency',
      subject: `New Message from ${name}`,
      html: `
        <div dir="ltr" style="font-family: sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
