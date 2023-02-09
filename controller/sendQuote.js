const TwilioRes = require("../Twilio/twilio.js");
const twilioMeth = new TwilioRes();
const sendQuote = async (req, res) => {
    const { phone } = req.body;
    if (phone) {
      twilioMeth.sendQuote(phone, res);
    }
};

module.exports = sendQuote;