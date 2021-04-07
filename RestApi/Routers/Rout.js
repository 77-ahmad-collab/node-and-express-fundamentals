const express = require("express");
const app = express();
const router = express.Router();
const {
  addData,
  getData,
  deleteData,
  updateData,
  getsingleData,
} = require("./Controller");

router.get("/students", getData);

router.get("/students/:id", getsingleData);

router.post("/students", addData);

router.delete("/students/:id", deleteData);

router.put("/students/:id", updateData);

module.exports = router;
