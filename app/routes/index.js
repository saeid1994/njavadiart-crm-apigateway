const express = require('express');

const router = express.Router();

const panel = require('./crm');

router.use('/panel', panel);
module.exports = router;
