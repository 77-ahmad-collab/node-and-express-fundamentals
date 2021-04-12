const signmodel = require("../Models/register");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { pasword, cpassword } = req.body;
    const addData = new signmodel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword,
    });
    const resp = await addData.GetTok();
    // console.log(resp);
    await res.cookie("jwt", resp, { expires: new Date(Date.now + 60000) });
    const result = await addData.save();

    // console.log(result);
    res.send("signup page");
  } catch (error) {
    res.status(400).send(error);
  }
};
const login = async (req, res) => {
  try {
    res.send("login page");
  } catch (error) {
    res.send(error);
  }
};

const setme = async (req, res) => {
  try {
    console.log("its working");
    const token = await jwt.sign(
      { _id: "60745d2c8dc6032d1c9f4d50" },
      process.env.SEC
    );
    console.log(token);
    res.cookie("jwt", token, { expires: new Date(Date.now + 3000) });
    res.send(token);
  } catch (error) {
    res.send(error);
  }
};
const secret = async (req, res) => {
  try {
    // console.log(req.details);
    const det = req.details;
    res.send(det);
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("jwt");
  res.send("logedouts");
};
module.exports = { signup, login, setme, secret, logout };
