import config from "./config";
import express from "express";
import DataBase from "./database";

const app = express();

DataBase.sync().then(() => {
  app.listen(config.PORT, () => {
    console.log(`server start at the ${config.PORT}`);
  });
});
