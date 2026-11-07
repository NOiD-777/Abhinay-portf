import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "abhinay.musku.reddy@gmail.com",
        subject: `[Portfolio Contact] New message from ${name}`,
        replyTo: email,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      });
    } else {
      console.log(`[Contact Form Fallback] Received from ${name} (${email}): ${message}`);
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out directly via email!" },
      { status: 500 }
    );
  }
}

