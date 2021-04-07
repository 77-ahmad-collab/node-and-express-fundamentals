const mongoose = require("mongoose");
const validator = require("validator");
const stuSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  phone: {
    type: Number,
    minlength: 11,
    unique: true,
  },
  address: String,
  email: {
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("the email user have entered is incorrect");
      }
    },
  },
  age: Number,
});

const S = "student";
const student = new mongoose.model("student", stuSchema, S);
module.exports = student;
