const express = require('express');

const router = express.Router();

const students = require('./students');

router.use('/students', students);

module.exports = router;
