const express = require('express');

const router = express.Router();
// const auth = require("../property/middleware/auth");
// const permission = require("../property/middleware/permission");

const home = require('./home');

// router.use("/", auth);
// router.use("/", permission);

router.use('/', home);

module.exports = router;
