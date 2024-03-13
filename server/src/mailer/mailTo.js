require("dotenv").config();
const sendEmail = require("./sendEmail");

const mailTo = async (emailInfo) => {
  try {
    const { name, email, subject, html, link } = emailInfo;
    const userData = { name, email };

    const messageData = { subject, body: html, link };
    const info = await sendEmail(userData, messageData);

    return info;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = mailTo;
