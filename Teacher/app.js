const { urlencoded } = require("express");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("./db/database");
const port = process.env.PORT || 7000;
const route = require("./Routes/route");
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use("/", route);

app.listen(port, () => {
  console.log("app is listening");
});
