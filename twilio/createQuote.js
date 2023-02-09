const axios = require("axios").default;
const { accountSid, authToken, fromNumber } = require("../config/config");
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
