import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/email-template";
import { EMAIL } from "@/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: EMAIL,
      to: [EMAIL, "diegovfeder@gmail.com"],
      replyTo: email,
      subject: `Novo contato do site - ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        message,
      }) as React.ReactElement,
    });

    return NextResponse.json({
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
