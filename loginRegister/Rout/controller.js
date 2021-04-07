const sign = require("../models/register");
const bcrypt = require("bcryptjs");
const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { password, cpassword } = req.body;

    if (password === cpassword) {
      //   this.password = bcrypt.hash(password);
      //   cpassword = undefined;
      const data = new sign({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      data.save();
      //   console.log(result);
      res.send("data posted");
    } else {
      res.send("password no matched");
    }
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await sign.findOne({ email: email });

    const match = await bcrypt.compare(password, result.password);
    if (match) {
      res.send("loged in");
    } else {
      res.send("invalid hay bhais");
    }
  } catch (error) {
    res.send("invalid login details");
  }
};
module.exports = { signup, login };
