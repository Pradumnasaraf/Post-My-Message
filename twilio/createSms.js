import dotenv from "dotenv";
import twilio from "twilio";
dotenv.config();
import { accountSid, authToken, fromNumber } from "../config/config.js";
const twilioClient = twilio(accountSid, authToken);

const createSms = (phone, message, res) => {
  twilioClient.messages
    .create({
      body: message,
      from: fromNumber,
      to: phone,
    })
    .then((message) => {
      console.log(
        `A SMS was sent to ${phone}, with message SID ${message.sid}.`
      );
      res.status(200).send({
        message: `message sent to ${phone}, with message SID ${message.sid}.`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default createSms;
