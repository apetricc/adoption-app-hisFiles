const express = require("express");
const { cats } = require("./data");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/cats", async (req, res) => {
  // demo why we don't want to hit server directly in our tests for the front end:
  // throw new Error("error");
  return res.json(cats);
});

app.listen(4000, () => {
  console.log("listening");
});
