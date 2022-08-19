const axios = require("axios").default;
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const twilioClient = require("twilio")(accountSid, authToken);

class TwilioRes {
  message;
  sendSms(phone, message) {
    twilioClient.messages
      .create({
        body: message,
        from: fromNumber,
        to: phone,
      })
      .then((message) => {
        console.log(`${message.sid}`);
      });
  }
  sendQuote(phone) {
    axios
      .get(`https://api.quotable.io/random`)
      .then((response) => {
        const quote = response.data.content;
        twilioClient.messages
          .create({
            body: quote,
            from: fromNumber,
            to: phone,
          })
          .then((message) => {
            console.log(`${message.sid}`);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
module.exports = TwilioRes;
