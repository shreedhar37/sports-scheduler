const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("hello friend");
});

module.exports = app;
