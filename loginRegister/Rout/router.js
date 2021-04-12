const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const sign = require("../models/register");
app.use(cookieParser());
const router = express.Router();
const { signup, login, secret, setme, logout } = require("./controller");
const auth = async (req, res, next) => {
  try {
    console.log(req.cookies.jwt);
    const token = req.cookies.jwt;
    const verify = await jwt.verify(token, process.env.SECRET);
    const user = await sign.findOne({ _id: verify._id });
    console.log(user.name);
    console.log(verify);
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.send(error);
  }
};
router.post("/signup", signup);
router.post("/login", login);
router.get("/secret", auth, secret);
router.get("/setme", setme);
router.get("/logout", auth, logout);
module.exports = router;
