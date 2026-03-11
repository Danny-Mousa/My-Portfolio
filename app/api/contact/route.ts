import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// lhgw fpqa oqmy gfob

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = await req.json();
      if (!name || !email || !message) {
        return new NextResponse(JSON.stringify({ error: "Missing fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact, Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      return new NextResponse(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Email sending failed" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  }

  return new NextResponse(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
