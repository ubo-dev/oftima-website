// pages/api/email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_fuaLVu4t_Lda89LwzbGvWvkCcbS4nfCog");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "okur.umutbilal@gmail.com", // Replace with your recipient email
        subject: subject,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email.", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
