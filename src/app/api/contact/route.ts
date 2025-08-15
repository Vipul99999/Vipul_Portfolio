import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Simple server validation
    if (
      !data.firstname ||
      !data.lastname ||
      !data.email ||
      !data.service ||
      !data.message
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional: verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: `"${data.firstname} ${data.lastname}" <${data.email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Message from Vipil_Portfolio - Service: ${data.service}`,
      text: `
        Name: ${data.firstname} ${data.lastname}
        Email: ${data.email}
        Phone: ${data.phone || "N/A"}
        Service: ${data.service}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send email:", error.message, error.stack);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
