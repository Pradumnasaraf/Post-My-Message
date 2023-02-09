const axios = require("axios").default;
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const twilioClient = require("twilio")(accountSid, authToken);

const createQuote = (phone, res) => {
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
          console.log(
            `A quote was sent to ${phone}, with message SID ${message.sid}.`
          );
          res.status(200).send({
            message: `message sent to ${phone}, with message SID ${message.sid}.`,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = createQuote;
