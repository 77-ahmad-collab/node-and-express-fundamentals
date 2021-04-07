const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const signSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  cpassword: String,
});
const signups = "signup";
// const signup = new mongoose.model("signup", signSchema, signups);
signSchema.pre("save", async function (next) {
  console.log("working");
  this.password = await bcrypt.hash(this.password, 10);
  console.log(this.password);
  this.cpassword = undefined;
  next();
});
module.exports = mongoose.model("signup", signSchema, signups);
