import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class GMailMailProvider implements IMailProvider {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_TRANSPORTER_USER,
        pass: process.env.NODEMAILER_TRANSPORTER_PASS,
      },
    });
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
