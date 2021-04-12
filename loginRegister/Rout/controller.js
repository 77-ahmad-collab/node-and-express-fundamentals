const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const sign = require("../models/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(cookieParser());
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
      const token = await data.Mytoken();
      await res.cookie("jwt", token, {
        expires: new Date(Date.now() + 10000),
      });
      // console.log("your token", token);
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
    console.log(result);
    const match = await bcrypt.compare(password, result.password);

    // console.log(password);
    const token = await result.Mytoken();
    console.log(token);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 600000),
    });
    // console.log(cookie);
    // console.log(match, "the match");
    // console.log("token generated at login time", token);
    if (match) {
      res.send(token);
    } else {
      res.send("invalid hay bhais");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
const secret = async (req, res) => {
  res.send("sss");
};
const setme = async (req, res) => {
  const result = await sign.findOne({ email: "ahmaq@gmail.com" });
  // console.log(result);
  const token = await result.Mytoken();
  // console.log(token);
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 600000),
  });
  res.send(token);
  // c
};
const logout = async (req, res) => {
  try {
    await res.clearCookie("jwt");
    req.user.tokens = [];
    // req.user.tokens = req.user.tokens.filter((ba) => ba.token != req.token);
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signup, login, secret, setme, logout };
