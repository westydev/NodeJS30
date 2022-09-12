const nodemailer = require(`nodemailer`)

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, //Servis
  auth: {
    user: 'xxxx', // Sender Gmail
    pass: 'xxx' // Sender Pass
  }
});

var mailOptions = {
  from: 'xxx', //Sender Gmail
  to: 'xxx', //Sending Gmail
  subject: 'NodeJS30', //Subject
  text: `L Using Nodemailer` //Your Text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});