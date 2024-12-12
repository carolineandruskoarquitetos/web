import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactEmailTemplate } from "@/components/email-template";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
      // From: Must be your verified domain in Resend
      from: "onboarding@resend.dev",

      // To: Your email where you want to receive contacts
      to: "diegovfeder@gmail.com",

      // TODO: Update email
      // to: "contato@carolineandrusko.com.br",

      // ReplyTo: Set this to the user's email so you can reply directly to them
      replyTo: email,
      subject: `Novo contato do site - ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

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
