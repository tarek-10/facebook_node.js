const nodemailer = require("nodemailer");
const cron = require('node-cron');

const sendEmails = async (dest, masseage) => {

  cron.schedule('* */2 * * * *', async () => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_SENDER, // generated ethereal user
        pass: process.env.USER_PASSWORD, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: dest, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: masseage, // html body
      attachments: [{ // file on disk as an attachment
        filename: 'report.pdf',
        path: 'invoice.pdf', // stream this file,
        contentType: 'application/pdf'

      }, ]
    });
  });
}


module.exports = sendEmails