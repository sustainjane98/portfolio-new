import Imap from "imap";

export default class EmailService {
  private port = Number(process.env["EMAIL_PORT"]);

  private imap = new Imap({
    user: process.env["EMAIL_USERNAME"],
    password: process.env["EMAIL_PASSWORD"],
    host: process.env["EMAIL_HOST"],
    port: this.port,
    tls: this.port === 465,
  });
}
