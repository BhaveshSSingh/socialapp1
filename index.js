const express = require("express");
const format = require("date-format");
require("dotenv").config();
console.log("Node js is running");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "bhaveshSingh",
    followers: 66,
    follows: 89,
    date: format.asString("dd[MM]- hh:mm:ss", new Date()),
  };

  res.status(200).json({ instaSocial });
});
app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    name: "facebookAccount",
    followers: 530,
    follows: 330,
    date: format.asString("dd[MM]:- hh:mm:ss", new Date()),
  };

  res.status(200).send({ instaSocial });
});
app.get("/api/v1/linkedIn", (req, res) => {
  const instaSocial = {
    name: "linkedInAccount",
    followers: 350,
    follows: 304,
    date: format.asString("dd[MM]:yyyy- hh:mm:ss", new Date()),
  };

  res.status(200).send({ instaSocial });
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
