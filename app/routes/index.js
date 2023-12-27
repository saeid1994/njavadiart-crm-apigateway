const express = require('express');

const router = express.Router();

const panel = require('./crm');

router.use('/crm', panel);
module.exports = router;
