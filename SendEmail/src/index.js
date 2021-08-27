"use strict";
const nodemailer = require("nodemailer");
const allQuotes = require("../src/quote.json");
require('dotenv').config()

// /**
//  * sendEmail
//  * @param {Object} mailObj - Email meta data and body
//  * @param {String} from - Email address of the sender
//  * @param {Array} recipients - Array of recipients email address
//  * @param {String} subject - Subject of the email
//  * @param {String} message - message
//  */

 function randomizer() {
  let random = Math.floor(Math.random() * 39) + 1;
  return `"${allQuotes[random].text}" - ${allQuotes[random].from}`;
}

const sendEmail = async (mailObj) => {
  const { from, recipients, subject, message } = mailObj;

  try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // send mail with defined transport object
    let mailStatus = await transporter.sendMail({
      from: from, // sender address
      to: recipients, // list of recipients
      subject: subject, // Subject line
      text: message, // plain text
    });

    console.log(`Message sent: ${mailStatus.messageId}`);
    return `Message sent: ${mailStatus.messageId}`;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
};
// refilwe.mashile@umuzi.org
const mailObj = {
  from: "andile.dimba@umuzi.org",
  recipients: ["refilwe.mashile@umuzi.org"],
  subject: "Sending email by nodejs",
  message: randomizer(),
};

sendEmail(mailObj).then((res) => {
  console.log(res);
});
