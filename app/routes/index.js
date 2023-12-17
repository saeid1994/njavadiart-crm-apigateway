const express = require("express");
const router = express.Router();

const panel = require("./panel");

router.use("/panel", panel);
module.exports = router;
