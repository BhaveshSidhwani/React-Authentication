import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "bhaveshsidhwani007@gmail.com",
        from: process.env.SENDER_EMAIL,
        subject: "Does this work?",
        text: "If you are reading this... yes!!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
