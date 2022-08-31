import express from "express";
import dotenv from "dotenv";
import models from "./models/index";

dotenv.config();

const env = process.env;
const app = express();


await sequelize.authenticate();

app.listen(env.SEVERER_PORT, () => console.log(`Server started on: ${env.SEVERER_PORT} port`));