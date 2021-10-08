/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const storeItems = require("./storeItems.json");

const app = express();
const port = 3001;

app.get("/storeItems", (req, res) => {
  res.send(JSON.stringify(storeItems));
});

app.all("*", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
