import express from "express";
import dotenv from "dotenv";
import sequelize from "./models/index";

dotenv.config();

const env = process.env;
const app = express();

 (async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(env.SEVERER_PORT, () => console.log(`Server started on port ${env.SEVERER_PORT} `));
  } catch (err) {
    console.log(err);
  }
})();