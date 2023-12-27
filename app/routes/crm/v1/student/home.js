const express = require('express');

const router = express.Router();
const HomeController = require('../../../../controllers/crm/student/v1/HomeController');

// const { check, body } = require('express-validator/check');

router.get('/', HomeController.getStudents);

module.exports = router;
