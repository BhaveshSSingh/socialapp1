const express = require("express");
console.log("Node js is running");

const PORT = 4000 || process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "bhaveshSingh",
    followers: 66,
    follows: 89,
    date: Date.now(),
  };

  res.status(200).json({ instaSocial });
});
app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    name: "facebookAccount",
    followers: 530,
    follows: 330,
    date: new Date(),
  };

  res.status(200).send({ instaSocial });
});
app.get("/api/v1/linkedIn", (req, res) => {
  const instaSocial = {
    name: "linkedInAccount",
    followers: 350,
    follows: 304,
    date: new Date(),
  };

  res.status(200).send({ instaSocial });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
