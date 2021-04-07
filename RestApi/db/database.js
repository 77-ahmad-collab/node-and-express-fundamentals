const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/department", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log("database coonected suceesfully"))
  .catch((err) => console.log(err));
