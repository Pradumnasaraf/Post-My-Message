const express = require("express");
const router = express.Router();
const sendQuote = require("../controller/sendQuote.js")
const sendSms = require("../controller/sendSms.js")

router.post("/sendsms", sendSms);
router.post("/sendquote", sendQuote);

module.exports = router;
