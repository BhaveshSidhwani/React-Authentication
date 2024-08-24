import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

export const sendEmail = ({ to, from, subject, text, html }) => {
  const msg = {
    from,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(msg);
};
