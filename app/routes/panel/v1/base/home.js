const express = require("express");
const router = express.Router();
const HomeController = require("../../../../controllers/panel/base/HomeController");

// const { check } = require("express-validator/check");

router.get("/areas", HomeController.getAreas);

router.get("/provinces", HomeController.getProvinces);

router.get("/cities", HomeController.getCities);

router.get("/streets", HomeController.getStreets);

module.exports = router;
