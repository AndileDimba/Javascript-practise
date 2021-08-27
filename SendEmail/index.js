"use strict";
const nodemailer = require("nodemailer");


//  * @param {Object} mailObj - Email meta data and body
//  * @param {String} from - Email address of the sender
//  * @param {Array} recipients - Array of recipients email address
//  * @param {String} subject - Subject of the email
//  * @param {String} message

const sendEmail = async (mailObj) => {
  const { from, recipients, subject, message } = mailObj;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: "andile.dimba@umuzi.org",
        pass: "rS3N5qFGHOCAygdI",
      },
    });

    let mailStatus = await transporter.sendMail({
      from: from,
      to: recipients,
      subject: subject,
      text: message,
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

const mailObj = {
  from: "andile.dimba@umuzi.org",
  recipients: ["mlamulia75@gmail.com"],
  subject: "Sending email by nodejs",
  message:
    "Hey Mlamuli, I am sending this email to you by nodejs using sendinblue on the R=email random inspirational quote project",
};

sendEmail(mailObj).then((res) => {
  console.log(res);
});
