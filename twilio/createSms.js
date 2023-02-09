require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const twilioClient = require("twilio")(accountSid, authToken);

const createSms = (phone, message, res) => {
  twilioClient.messages
    .create({
      body: message,
      from: fromNumber,
      to: phone,
    })
    .then((message) => {
      console.log(`${message.sid}`);
      res
        .status(200)
        .send(`Message sent to ${phone}, with message SID ${message.sid}.`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createSms;