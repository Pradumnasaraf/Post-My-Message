const express = require("express");
const twilio = require("twilio");
require("dotenv").config();
const path = require("path");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./middleware/logger"));
app.use("/", require("./router/routes"));
app.use(require("./middleware/404.js"));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is LIVE on http://localhost:${PORT}`);
});
