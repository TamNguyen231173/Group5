import nodemailer from "nodemailer";
import config from "config";
import pug from "pug";
import { convert } from "html-to-text";
import { User } from "../models/user.model";

const smtp = config.get<{
  host: string;
  port: number;
  user: string;
  pass: string;
}>("smtp");

export default class Email {
  firstName: string;
  to: string;
  from: string;
  constructor(public user: User, public url: string, public code?: string) {
    this.firstName = user.name.split(" ")[0];
    this.to = user.email;
    this.from = `AnimalInfo ${config.get<string>("emailFrom")}`;
  }

  private newTransport() {
    // if (process.env.NODE_ENV === "production") {
    //   console.log("Hello");
    // }

    return nodemailer.createTransport({
      ...smtp,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });
  }

  private async send(template: string, subject: string) {
    // Generate HTML template based on the template string
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      firstName: this.firstName,
      subject,
      url: this.url,
      code: this.code,
    });
    // Create mailOptions
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: convert(html),
      html,
    };

    console.log(html);
    console.log("mail Options", mailOptions);

    // Send email
    const info = await this.newTransport().sendMail(mailOptions);
  }

  async sendVerificationCode() {
    await this.send("verificationCode", "Your account verification code");
  }

  async sendPasswordResetToken() {
    await this.send(
      "resetPassword",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
}
