import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  // בדיקה אם המפתח קיים לפני שבכלל מתחילים
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY in Environment Variables");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // אתחול רק כאן מונע את השגיאה בזמן ה-Build
    const resend = new Resend(apiKey);

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
