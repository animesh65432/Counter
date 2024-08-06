import config from "./config";
import express from "express";

const app = express();
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Hello from node js",
  });
});

app.listen(config.PORT, () => {
  console.log(`server start at the ${config.PORT}`);
});
