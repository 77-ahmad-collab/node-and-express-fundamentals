const { Router } = require("express");
const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signmodel = require("../Models/register");
const { signup, login, setme, secret, logout } = require("./controller");

route.post("/signup", signup);

const auth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await signmodel.findOne({ email: email });
    // console.log(user);
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      next();
    } else {
      res.send("invalid login details");
    }
  } catch (error) {
    console.log(error);
  }
};
route.post("/login", auth, login);

route.get("/setme", setme);

const verifyme = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const result = await jwt.verify(req.cookies.jwt, process.env.SEC);
    // console.log(result);
    const details = await signmodel.findOne({ _id: result._id });
    req.details = details;
    next();
  } catch (error) {
    res.send("please login first");
  }
};

route.get("/secret", verifyme, secret);
route.get("/logout", logout);
module.exports = route;
