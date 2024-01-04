const express = require('express');

const router = express.Router();
const HomeController = require('../../../../controllers/crm/teacher/v1/HomeController');

// const { check, body } = require('express-validator/check');

router.get('/course', HomeController.getCourses);

router.get('/class/:courseId', HomeController.getClassByCourseId);

module.exports = router;
