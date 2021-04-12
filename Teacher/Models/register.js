const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cpassword: String,
  tokens: [
    {
      token: String,
    },
  ],
});

signSchema.methods.GetTok = async function (req, res, next) {
  console.log("jwt token function");
  const gtoken = jwt.sign(
    { _id: this._id },
    "mynameisahmedkhanathangenerateddhdhdhdjkfrbfbhrbfrrfbiu4guuigb4bub"
  );
  // const tok = jwt.sign({ id: this._id }, process.env.MY);
  this.tokens = await this.tokens.concat({ token: gtoken });
  await this.save();
  // console.log(gtoken);
  return gtoken;
};

signSchema.pre("save", async function () {
  // console.log(this.passwpord);
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(this.password, "password after hashing");
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }
});

const enroll = "enroll";
module.exports = mongoose.model("enroll", signSchema, enroll);
