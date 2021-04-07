const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/auth", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected database"))
  .catch((err) => console.log(err));
