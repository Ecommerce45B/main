require("dotenv").config();
const sendEmailNoti = require("./sendEmailNoti");

const mailToNoti = async (emailInfo) => {
  try {
    const { to, subject, html } = emailInfo;
    if (!to) {
      throw new Error(
        "Dirección de correo electrónico de destino no especificada en emailInfo"
      );
    }

    const messageData = { subject, body: html };

    const info = await sendEmailNoti(to, messageData);

    return info;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = mailToNoti;
