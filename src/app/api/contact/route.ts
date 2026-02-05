import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

// אתחול Resend עם ה-API Key מהסביבה
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function sendEmailNotification(submission: ContactSubmission): Promise<void> {
  if (!resend) {
    console.error("Resend API Key is missing! Check your Vercel Environment Variables.");
    return;
  }

  try {
    // 1. שליחת התראה לעסק (אליך)
    await resend.emails.send({
      from: "Superformance Website <onboarding@resend.dev>", // הערה חשובה למטה
      to: ["info@superformance.agency"],
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <div dir="ltr" style="font-family: sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${submission.name}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${submission.message}</p>
          <hr>
          <p><small>Submitted at: ${new Date(submission.submittedAt).toLocaleString()}</small></p>
        </div>
      `,
    });

    // 2. שליחת אישור ללקוח
    await resend.emails.send({
      from: "Superformance <onboarding@resend.dev>", 
      to: [submission.email],
      subject: "Thank you for contacting Superformance",
      html: `
        <div dir="ltr" style="font-family: sans-serif;">
          <h2>Thank you for reaching out, ${submission.name}!</h2>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>Best regards,<br>The Superformance Team</p>
        </div>
      `,
    });

    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error in sendEmailNotification:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newSubmission: ContactSubmission = {
      id: `contact_${Date.now()}`,
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    // שליחת המיילים
    await sendEmailNotification(newSubmission);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    }, { status: 201 });

  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
