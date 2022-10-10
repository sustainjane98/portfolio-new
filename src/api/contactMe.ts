import { NextApiRequest, NextApiResponse } from "next";
import { ContactMeData } from "../types/contactMeData";
import { createTransport, createTestAccount } from "nodemailer";

let testAccount = createTestAccount();

let transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env["EMAIL_USERNAME"], // generated ethereal user
    pass: process.env["EMAIL_PASSWORD"], // generated ethereal password
  },
});

const contactMeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const value = req.body as ContactMeData;

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

export default contactMeHandler;
