import { ImapFlow, MailboxObject } from "imapflow";

export default class EmailService {
  private port = Number(process.env["EMAIL_IMAP_PORT"]);

  private client = new ImapFlow({
    auth: {
      user: process.env["EMAIL_USERNAME"],
      pass: process.env["EMAIL_PASSWORD"],
    },
    host: process.env["EMAIL_IMAP_HOST"],
    port: this.port,
    secure: process.env["EMAIL_IMAP_SECURITY"] === "TLS",
  });

  private async getMailBox() {
    return await this.client.getMailboxLock("INBOX");
  }

  public async deleteAllEmails() {
    await this.client.connect();
    const lock = await this.getMailBox();

    try {
      await this.client.messageDelete("1:*");
    } finally {
      lock.release();
    }
  }

  public async getLastEmail() {
    await this.client.connect();
    const lock = await this.getMailBox();
    try {
      const mailBoxSize = String((this.client.mailbox as MailboxObject).exists);

      let message = await this.client.fetchOne(mailBoxSize, {
        source: true,
      });

      return message.source.toString();
    } finally {
      lock.release();
    }
  }
}
