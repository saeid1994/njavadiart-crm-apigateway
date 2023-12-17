const express = require("express");
const router = express.Router();

const base = require("./base");
const property = require("./property");
const customer = require("./customer");

router.use("/base", base);
router.use("/property", property);
router.use("/customer", customer);

module.exports = router;
