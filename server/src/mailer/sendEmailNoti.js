const nodemailer = require("nodemailer");
const messageNoti = require("./messageNoti");

const sendEmailNoti = async (to, messageData) => {
  const { subject, body } = messageData;

  const html = messageNoti(body);

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
    to,
    subject,
    html,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message);

  return info;
};

module.exports = sendEmailNoti;
