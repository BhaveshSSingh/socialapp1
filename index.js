const express = require("express");
console.log("Node js is running");

const PORT = 4000 || process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
