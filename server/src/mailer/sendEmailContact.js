const nodemailer = require("nodemailer");
const messageTemplate = require("./messageContact");

const sendEmailContact = async (userData, messageData) => {
  const { nombre, email } = userData;
  const { subject, body, link } = messageData;
  const html = messageTemplate(nombre, body, link);

  const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ecommerce.ft45b@gmail.com",
      pass: "ebgdjvgfhrvcrmqh",
    },
    tls: { rejectUnauthorized: false },
  };

  const message = {
    from: "ecommerce.ft45b@gmail.com",
    to: email,
    subject,
    html,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message);

  return info;
};

module.exports = sendEmailContact;
