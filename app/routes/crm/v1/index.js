const express = require('express');

const router = express.Router();

const student = require('./student');
const teacher = require('./teacher');

router.use('/student', student);
router.use('/teacher', teacher);

module.exports = router;
