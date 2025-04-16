import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST() {
  //   await  resend.emails.send({
  //         from: "...",
  //         to: "rafyahamza99@gmail.com",
  //         subject: "Hello Hamza",
  //         react: <WelcomeTemplate name="Hamza" />,
  //     })

  return NextResponse.json({});
}
