const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("./db/conn");
const router = require("./Rout/router");
const port = process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(port, () => {
  console.log("server is listening");
});
