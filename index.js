const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./middleware/logger"));
app.use("/", require("./router/routes"));
app.use(require("./middleware/404.js"));

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server is LIVE on http://localhost:${PORT}`);
});
