const mysql = require("mysql2");
let appConfig = require("config");
const mySqlCon = mysql.createConnection({
  host: "polly.iran.liara.ir",
  user: "root",
  port: "33395",
  password: "vEdZyMLXlhFgBwguixMKKa4Y",
  database: "akbari-realestate",
});

const getAreas = async function () {
  let query = `call GET_AREAS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getProvinces = async function () {
  let query = `call GET_PROVINCES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getCities = async function () {
  let query = `call GET_CITIES();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const getStreets = async function () {
  let query = `call GET_STREETS();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

module.exports = {
  getAreas,
  getProvinces,
  getCities,
  getStreets,
};
