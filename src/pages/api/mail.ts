import { type NextApiRequest, type NextApiResponse } from "next";
import { renderToStaticMarkup } from "react-dom/server";
import sgMail from "@sendgrid/mail";
import { type IFResultData } from "../../lib/computeResult";
import { EmailTemplate } from "../../lib/email/EmailTemplate";
import { type IFState } from "../../context/reducer";

export interface IFRequestBody {
  inputs: IFState;
  resultData: IFResultData;
  lead: {
    name?: string;
    email?: string;
    phone?: string;
  };
  targetEmail: string;
  locationName: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const api_key = process.env.SENDGRID_API_KEY;

    if (!api_key) throw new Error("Unabled to process request");

    const data: IFRequestBody = JSON.parse(req.body);

    const stringTemplate = renderToStaticMarkup(EmailTemplate(data));

    sgMail.setApiKey(api_key);

    const msg = {
      to: data.targetEmail,
      from: "cotizador@inteminer.com",
      subject: `Cotización en ${data.locationName}`,
      html: stringTemplate,
    };

    sgMail
      .send(msg)
      .then(() => res.status(200).json({ message: "Email Sent" }))
      .catch(() =>
        res.status(500).json({ message: "An unexpected error ocurred" })
      );
  }
}
