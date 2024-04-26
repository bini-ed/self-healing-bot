require("dotenv").config();
import express from "express";
import logger from "./utils/logger"
const app = express();
app.use(express.json());

process.on("uncaughtException", (ex) => {
  logger.error("Uncaught exception", ex);
});
process.on("unhandledRejection", (ex) => {
  logger.error("Unhandled rejection", ex);
});

app.listen(7000, () => console.log("Self healing bot running"));
