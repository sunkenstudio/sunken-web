"use server";
import { Resend } from "resend";
import EmailTemplate from "./app/components/EmailTemplate";
import { omit } from "lodash";
interface State {
  error: string | null;
  success: boolean;
}

interface Payload {
  senderEmail: string;
  receiverEmail: string;
  name: string;
  message: string;
  company: string;
}

export const sendEmail = async (prevState: State, formData: Payload) => {
  try {
    const { receiverEmail } = formData;
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "accounts@sunkenstudio.com",
      to: receiverEmail,
      subject: "New Client Message",
      react: EmailTemplate(omit(formData, "receiverEmail")),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
