import nodemailer from 'nodemailer';

// Load environment variables from a .env file
import dotenv from 'dotenv';
dotenv.config();

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

// Function to send an email
function sendEmail(from, to, subject, text) {
  const message = {
    from: `${from}`,
    to: `${to}`,
    subject: `${subject}`,
    text: `${text}`,
  };

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json('Email sent');
    }
  });
}

async function sendEmailToMultipleUsers(from, to, subject, text) {
  to.forEach((user) => {
    sendEmail(from, user.email, subject, text);
  });
}

export default { sendEmail, sendEmailToMultipleUsers };
