require("dotenv").config();
const sendEmail = require("./sendEmailContact");

const mailToContact = async (emailInfo) => {
  try {
    const { nombre, email, subject, html, link } = emailInfo;
    const userData = { nombre, email };
    const messageData = { subject, body: html, link };
    const info = await sendEmail(userData, messageData);

    return info;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = mailToContact;
