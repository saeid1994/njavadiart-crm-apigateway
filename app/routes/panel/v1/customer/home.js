const express = require("express");
const router = express.Router();
const HomeController = require("../../../../controllers/panel/customer/HomeController");

const { check } = require("express-validator/check");

router.get("/customers", HomeController.getCustomers);

router.post(
  "/customer",

  HomeController.addCustomer
);

router.get(
  "/exportToExcel",

  HomeController.exportToExcelProperty
);

module.exports = router;
