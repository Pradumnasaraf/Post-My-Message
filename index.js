import express from "express";
import dotenv from "dotenv";
import { PORT } from "./config/config.js";
import logger from "./middleware/logger.js";
import router from "./router/routes.js";
import notFound from "./middleware/404.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-disable-next-line no-undef
app.use("/", express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);
app.use("/", router);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is LIVE on http://localhost:${PORT}`);
});
