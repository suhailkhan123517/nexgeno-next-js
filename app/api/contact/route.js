import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  //   send mail to admin with contact form data

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
      user: "sales@nexgeno.in",
      pass: "eheylhdxiawvhxxk",
    },
  });

  const mailOptions = {
    from: body.email,
    to: [
      "tamir@nexgeno.in",
      "arif@nexgeno.in",
      "sales@nexgeno.in",
      "suhail.makent@gmail.com",
    ],
    subject: body.subject,
    text:
      "Name " +
      body.name +
      "\nEmail :" +
      body.email +
      "\nMobile Number :" +
      body.number +
      "\nCompany Name :" +
      body.companyName +
      "\nMessage :" +
      body.message +
      "\nServices: " +
      body.services +
      "\nProject Budget :" +
      body.projectBudget,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });

  return NextResponse.json({ message: "Email send Successfully" });
}
