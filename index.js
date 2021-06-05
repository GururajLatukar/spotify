require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("spotify app");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
