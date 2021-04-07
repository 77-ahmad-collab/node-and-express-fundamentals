const express = require("express");
const app = express();
require("./db/database");
// const student  = require("./db/Models/studentsdata");
app.use(express.json());
const myrouter = require("./Routers/Rout");
const port = process.env.PORT || 9000;
app.use("/", myrouter);

app.listen(port, () => {
  console.log("server is listening");
});
