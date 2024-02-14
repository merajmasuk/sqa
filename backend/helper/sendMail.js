const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

const emailWithNodeMailer = async () => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME, // sender address
            to: "md.stu20185@juniv.edu", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log('message send in email' + info.response);
    } catch (error) {
        console.log('error message is '+error);
        throw error;
    }

}

module.exports = { emailWithNodeMailer };