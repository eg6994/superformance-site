import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "contact-submissions.json");

// Initialize Resend - will only send emails if API key is configured
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

async function sendEmailNotification(submission: ContactSubmission): Promise<void> {
  if (!resend) {
    console.log("Resend not configured - skipping email notification");
    return;
  }

  try {
    // Send notification to business
    await resend.emails.send({
      from: "Superformance Website <noreply@superformance.agency>",
      to: ["Info@superformance.agency"],
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted at: ${new Date(submission.submittedAt).toLocaleString()}</small></p>
        <p><small>Submission ID: ${submission.id}</small></p>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Superformance <noreply@superformance.agency>",
      to: [submission.email],
      subject: "Thank you for contacting Superformance",
      html: `
        <h2>Thank you for reaching out, ${submission.name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 3px solid #22c55e; padding-left: 16px; margin: 16px 0; color: #666;">
          ${submission.message.replace(/\n/g, "<br>")}
        </blockquote>
        <p>Best regards,<br>The Superformance Team</p>
        <hr>
        <p style="color: #888; font-size: 12px;">
          Superformance Limited<br>
          Unit 2A, 17/F, Glenealy Tower, No.1 Glenealy, Central, Hong Kong S.A.R
        </p>
      `,
    });

    console.log("Email notifications sent successfully");
  } catch (error) {
    console.error("Error sending email notification:", error);
    // Don't throw - we still want to save the submission even if email fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create new submission
    const newSubmission: ContactSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    // Save to file
    const submissions = await getSubmissions();
    submissions.push(newSubmission);
    await saveSubmissions(submissions);

    // Send email notifications (async, don't wait)
    sendEmailNotification(newSubmission);

    // Log for demo purposes
    console.log("New contact submission:", newSubmission);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
        submissionId: newSubmission.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ submissions, total: submissions.length });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
