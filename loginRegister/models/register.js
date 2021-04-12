const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 9,
  },
  cpassword: String,
  tokens: [
    {
      token: { type: String },
    },
  ],
});
const signups = "signup";

signSchema.methods.Mytoken = async function () {
  const res = await jwt.sign({ _id: this._id }, process.env.SECRET);
  this.tokens = await this.tokens.concat({ token: res });
  const savestate = await this.save();
  // console.log(res);
  return res;
};

signSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(this.password);
    this.cpassword = undefined;
  }
  // console.log("working");

  next();
});
module.exports = mongoose.model("signup", signSchema, signups);
