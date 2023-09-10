import { NextResponse, NextRequest } from "next/server";
import Joi from "joi";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const validationSchema = Joi.object({
  email: Joi.string().trim().required().email().message("invalid email"),
  message: Joi.string()
    .trim()
    .min(4)
    .message("invalid message")
    .min(10)
    .message("invalid message"),
});

export default async function postMessage(req: NextRequest) {
  try {
    const { email, message } = await req.json();
    const { error } = validationSchema.validate({ email, message });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const resendFeedBack = await resend.emails.send({
      from: "Contact Portfolio <onboarding@resend.dev>",
      to: "essohanam.alou@imsp-uac.org",
      reply_to: email,
      subject: "contact",
      react: EmailTemplate({ email, message }),
    });
    const sentEmailId = resendFeedBack.id;
    if (sentEmailId) {
      return NextResponse.json(
        {
          message: "sent",
          success: "Email sent. Thanks for contacting me.",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        error: "Email not Sent. Please try again",
        success: "Email sent. Thanks for contacting me.",
      },
      { status: 200 }
    );
  } catch (e) {
    console.log("postMessage____error:", e);
    return NextResponse.json(
      { error: "Email not Sent. Please try again" },
      { status: 500 }
    );
  }
}
