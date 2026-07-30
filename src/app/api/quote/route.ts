import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/emailjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, timeline, message } = body;

    // Validate request parameters
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: "Name, email, and project type are required fields." },
        { status: 400 }
      );
    }

    // Call email sender
    const result = await sendEmail({
      name,
      email,
      subject: `MirexTech Quote Request - ${projectType}`,
      message: message || "No description provided.",
      type: "quote",
      details: `Project Category: ${projectType} | Budget Tier: ${budget || "Not Specified"} | Target Timeline: ${timeline || "Not Specified"}`,
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: "Quote request logged." }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: result.error || "Failed to transmit quote request." },
        { status: result.status || 500 }
      );
    }
  } catch (error: any) {
    console.error("API quote error:", error);
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 });
  }
}