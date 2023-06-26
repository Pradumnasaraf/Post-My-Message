import express from "express";
import sendQuote from "../controller/sendQuote.js";
import sendSms from "../controller/sendSms.js";

const router = express.Router();

router.post("/sendsms", sendSms);
router.post("/sendquote", sendQuote);

export default router;
