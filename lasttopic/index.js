const express = require("express");
const app = express();
const people = require("./Data");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const myrouter = require("./router/people");
//parsing form data
app.use(upload.array());
// parse various different custom JSON types as JSON

app.use(bodyParser.json());

// parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

//parse form data
app.use(express.urlencoded({ extended: false }));

//calling app
app.use("/people/api", myrouter);
app.listen(7000, () => {
  console.log("server is listening");
});
