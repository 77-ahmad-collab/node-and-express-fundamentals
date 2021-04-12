const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to auth databse"))
  .catch((err) => console.log(err));
