const createSms = require("../twilio/createSms");
const sendSms = async (req, res) => {
  const { phone, message } = req.body;
  if (phone && message) {
    createSms(phone, message, res);
  }
};

module.exports = sendSms;
