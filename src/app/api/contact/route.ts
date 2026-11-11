import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, honeypot } = body;

    // Silent drop if bot triggers honeypot
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // Validation
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: "Please provide your name, a valid email address, and a message." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g., name@example.com)." },
        { status: 400 }
      );
    }

    if (cleanName.length > 100) {
      return NextResponse.json(
        { error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must be under 5000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "abhinay.musku.reddy@gmail.com";
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      if (process.env.NODE_ENV === "production") {
        console.error("Missing RESEND_API_KEY environment variable in production.");
        return NextResponse.json(
          {
            error:
              "Email dispatch is not configured yet. Please email abhinay.musku.reddy@gmail.com directly!",
          },
          { status: 503 }
        );
      }

      // Local development fallback
      console.log("----------------------------------------");
      console.log("[DEV CONTACT FORM DISPATCH]");
      console.log(`From:    ${cleanName} <${cleanEmail}>`);
      console.log(`To:      ${recipientEmail}`);
      console.log(`Message: ${cleanMessage}`);
      console.log("----------------------------------------");

      return NextResponse.json(
        {
          success: true,
          message: "Message logged to dev console (RESEND_API_KEY not set locally).",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const dateFormatted = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const escapedName = escapeHtml(cleanName);
    const escapedEmail = escapeHtml(cleanEmail);
    const escapedMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br/>");

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Portfolio Mission Brief</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #050508; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ededed;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #0d0d12; border: 1px solid #1f1f28; border-top: 4px solid #ae040d; border-radius: 12px; overflow: hidden;">
    <tr>
      <td style="padding: 28px 32px; background: linear-gradient(180deg, rgba(174,4,13,0.12) 0%, rgba(13,13,18,0) 100%);">
        <p style="margin: 0 0 6px 0; font-size: 11px; font-family: monospace; letter-spacing: 0.15em; text-transform: uppercase; color: #ff4d5a;">
          // TRANSMIT THE SIGNAL · PORTFOLIO COMMS
        </p>
        <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
          New Mission Brief Received
        </h1>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #71717a;">
          ${escapeHtml(dateFormatted)} IST
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 32px 24px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #14141c; border: 1px solid #22222f; border-radius: 8px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #22222f; width: 90px; font-size: 11px; font-family: monospace; text-transform: uppercase; color: #a1a1aa;">
              Sender
            </td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #22222f; font-size: 14px; font-weight: 600; color: #ffffff;">
              ${escapedName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; width: 90px; font-size: 11px; font-family: monospace; text-transform: uppercase; color: #a1a1aa;">
              Email
            </td>
            <td style="padding: 12px 16px; font-size: 14px; color: #ededed;">
              <a href="mailto:${escapedEmail}" style="color: #ff4d5a; text-decoration: none;">${escapedEmail}</a>
            </td>
          </tr>
        </table>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #a1a1aa;">
            Message Payload:
          </p>
          <div style="background-color: #14141c; border-left: 3px solid #ae040d; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7;">
            ${escapedMessage}
          </div>
        </div>

        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
          <tr>
            <td style="border-radius: 6px; background-color: #ae040d;">
              <a href="mailto:${escapedEmail}?subject=Re:%20Portfolio%20Mission%20Brief" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; letter-spacing: 0.05em; text-transform: uppercase;">
                Reply Directly &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 32px; background-color: #09090d; border-top: 1px solid #181822; font-size: 11px; color: #52525b; text-align: center;">
        Dispatched automatically from Abhinay Musku&apos;s Portfolio &middot; Sol-3
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const textContent = `
New Mission Brief from ${cleanName}

Sender:  ${cleanName}
Email:   ${cleanEmail}
Time:    ${dateFormatted} IST

Message:
${cleanMessage}

---
Dispatched automatically from Abhinay Musku's Portfolio (Sol-3)
    `.trim();

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Mission] ${cleanName}: ${cleanMessage.slice(0, 48)}${cleanMessage.length > 48 ? "..." : ""}`,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "Unable to transmit message via email service. Please email directly!",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Signal received loud and clear! I'll be in touch soon.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API unhandled error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out directly via email!" },
      { status: 500 }
    );
  }
}
