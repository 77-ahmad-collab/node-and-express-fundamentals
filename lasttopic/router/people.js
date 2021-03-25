const express = require("express");
const app = express();

const router = express.Router();
const { getdata, putdata, deletedata, postdata } = require("./controllers");

router.get("/", getdata);
router.post("/add", postdata);
router.delete("/:id", deletedata);
router.put("/:id", putdata);
module.exports = router;
