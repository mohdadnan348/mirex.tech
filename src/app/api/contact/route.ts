import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/emailjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate request parameters
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Call email sender
    const result = await sendEmail({
      name,
      email,
      subject: subject || "MirexTech Contact Inquiry",
      message,
      type: "contact",
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: "Inquiry logged." }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: result.error || "Failed to transmit message." },
        { status: result.status || 500 }
      );
    }
  } catch (error: any) {
    console.error("API contact error:", error);
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 });
  }
}
