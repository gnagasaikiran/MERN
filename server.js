const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/yourdbname";

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  return res.send("Hello World!!!!");
});

app.listen(5000, () => console.log("Server Running...."));
