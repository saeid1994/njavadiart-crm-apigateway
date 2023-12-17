const express = require('express');

const router = express.Router();

const property = require('./students');

router.use('/property', property);

module.exports = router;
