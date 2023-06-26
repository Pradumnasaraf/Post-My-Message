import createQuote from "../twilio/createQuote.js";
const sendQuote = async (req, res) => {
  const { phone } = req.body;
  if (phone) {
    createQuote(phone, res);
  }
};

export default sendQuote;
