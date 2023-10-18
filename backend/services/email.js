const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services like 'SMTP', 'Outlook', etc.
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'Subject of your email',
    text: 'The body of your email'
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email: ', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
