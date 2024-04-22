// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, message, source } = req.body;

  // Define your SMTP credentials
  const smtpHost = process.env.SMTP_HOST; // Your SMTP Host
  const smtpPort = Number(process.env.SMTP_PORT); // Your SMTP Port
  const smtpUser = process.env.SMTP_USER; // Your SMTP User
  const smtpPassword = process.env.SMTP_PASSWORD; // Your SMTP Password
  const smtpFromAddress = process.env.SMTP_FROM_ADDRESS; // Your FROM address

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Optiven Website Contact Form" <${smtpFromAddress}>`,
      to: "info@optiven.co.ke",
      subject: "Inquiry",
      text: `You received a new submission from ${name} (${email}):\nPhone Number: ${phone}\nMessage: ${message}\nHeard About Us Via: ${source}`,
      // You can also use the `html` property to send HTML email content
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.log("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
};

export default sendEmail;
