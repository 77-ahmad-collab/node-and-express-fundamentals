const express = require("express");
const app = express();
const logger = require("./logger");
app.use("/api", logger);
app.get("/", (req, res) => {
  res.send("hello from logger");
});
app.get("/api/ahmad", (req, res) => {
  res.send("aho this is logeer");
});
app.get("/postman/:id/:pid", (req, res) => {
  console.log(req.params);
  res.status(200).json({ name: "ahmad", age: "20", service: "postman" });
});

app.listen(8000, () => {
  console.log("server is listening");
});
