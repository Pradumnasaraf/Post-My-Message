import axios from "axios";
import { accountSid, authToken, fromNumber } from "../config/config.js";
import twilio from "twilio";
const twilioClient = twilio(accountSid, authToken);

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

export default createQuote;
