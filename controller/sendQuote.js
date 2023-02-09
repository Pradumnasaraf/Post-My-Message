const createQuote = require("../twilio/createQuote.js");
const sendQuote = async (req, res) => {
  const { phone } = req.body;
  if (phone) {
    createQuote(phone, res);
  }
};

module.exports = sendQuote;
