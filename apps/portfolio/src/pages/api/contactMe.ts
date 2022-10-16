import { NextApiRequest, NextApiResponse } from "next";
import { ContactMeData } from "../../types/contactMeData";
import { createTransport } from "nodemailer";
import Mailgen from "mailgen";

const port = Number(process.env["EMAIL_PORT"]);

let transporter = createTransport({
  host: process.env["EMAIL_HOST"],
  port,
  secure: process.env["EMAIL_SECURITY"] === "TLS", // true for 465, false for other ports
  auth: {
    user: process.env["EMAIL_USERNAME"], // generated ethereal user
    pass: process.env["EMAIL_PASSWORD"], // generated ethereal password
  },
});

const contactMeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      res.status(404).end();
      return;
    }

    const value = req.body as ContactMeData;
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        // Appears in header & footer of e-mails
        name: "Jane Will",
        link: "https://personal-page-ivory.vercel.app/",
        copyright: "Copyright © 2022 Jane Will. All rights reserved.",
      },
    });
    const email: Mailgen.Content = {
      body: {
        name: "Jane",
        intro: "Someone contacted you via your contact form",
        table: {
          data: Object.entries(value)?.map(([key, value]) => ({
            item: key,
            value,
          })),
        },
      },
    };
    const emailBody = mailGenerator.generate(email);
    const emailText = mailGenerator.generatePlaintext(email);

    await transporter.sendMail({
      from: `"${value.name}" <${value.email}>`, // sender address
      to: `${process.env["EMAIL_USERNAME"]}`, // list of receivers
      subject: "You got an contact request", // Subject line
      text: emailText, // plain text body
      html: emailBody, // html body
    });
    res.status(200).end();
  } catch (err) {
    res.status(500).send(`Something went wrong, ${err}`);
  }
};

export default contactMeHandler;
