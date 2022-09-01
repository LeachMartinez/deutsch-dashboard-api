import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js";
import router from "./routes/index.js";

dotenv.config();

const env = process.env;
const app = express();

app.use("/", router);

 (async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(5000, () => console.log(`Server started on port ${5000} `));
  } catch (err) {
    console.log(err);
  }
})();