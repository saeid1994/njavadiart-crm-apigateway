const Home = require("../../../models/panel/base/v1/Home");
// const convertNullParams = require("../../../../util");
// const { validationResult } = require("express-validator/check");

exports.getAreas = async (req, res, next) => {
  try {
    const data = await Home.getAreas();
    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProvinces = async (req, res, next) => {
  try {
    const data = await Home.getProvinces();
    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCities = async (req, res, next) => {
  try {
    const data = await Home.getCities();
    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getStreets = async (req, res, next) => {
  try {
    const data = await Home.getStreets();
    return res.json({
      status: "success",
      message: "properties have successfully received",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
