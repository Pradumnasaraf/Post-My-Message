import createSms from "../twilio/createSms.js";
const sendSms = async (req, res) => {
  const { phone, message } = req.body;
  if (phone && message) {
    createSms(phone, message, res);
  }
};

export default sendSms;
