const TwilioRes = require("../Twilio/twilio.js");
const twilioMeth = new TwilioRes();
const sendSms = async (req, res) => {
  const { phone, message } = req.body;
  if (phone && message) {
    twilioMeth.sendSms(phone, message, res);
  }
};

module.exports = sendSms;
