const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kvizconde.dev@gmail.com',
    subject: 'Welcome to the best Task Manager App!',
    text: `Welcome to the app, ${name}. Need assistance? Feel free to contact us!`,
    // you can use html: here to design custom email style
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kvizconde.dev@gmail.com',
    subject: 'Sad to see you go! 😭',
    text: `Goodbye ${name}. Hope to see you again!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
