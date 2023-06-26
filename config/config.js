import dotenv from "dotenv";
import process from "process";
dotenv.config();

export const accountSid = process.env.TWILIO_ACCOUNT_SID;
export const authToken = process.env.TWILIO_AUTH_TOKEN;
export const fromNumber = process.env.TWILIO_FROM_NUMBER;
export const toNumber = process.env.TWILIO_TO_NUMBER;
export const PORT = process.env.PORT || 3000;
