const express = require("express");
const router = express.Router();
const TwilioRes = require("../Twilio/twilio.js");
const twilioMeth = new TwilioRes();

router.post("/sendsms", (req, res) => {
  const { phone, message } = req.body;
  if (phone && message) {
    twilioMeth.sendSms(phone, message);
  }
});
router.post("/sendquote", (req, res) => {
  const { phone } = req.body;
  if (phone) {
    twilioMeth.sendQuote(phone);
  }
});

module.exports = router;
