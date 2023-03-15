import sgMail from "@sendgrid/mail";

export interface IFProps {
  community: string;
}
export const sendMail = ({ community }: IFProps) => {
  const api_key = process.env.SENDGRID_API_KEY;

  if (!api_key) return;

  sgMail.setApiKey(api_key);
  const msg = {
    to: "eserranor98@gmail.com",
    from: "test@inteminer.com",
    subject: `Cotización de terreno en ${community}`,
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(msg)
    .then(() => console.log("Email sent"))
    .catch(() => console.log("Error occurred"));
};
