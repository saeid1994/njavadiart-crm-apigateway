const mysql = require("mysql2");
let appConfig = require("config");
const mySqlCon = mysql.createConnection({
  host: "polly.iran.liara.ir",
  user: "root",
  port: "33395",
  password: "vEdZyMLXlhFgBwguixMKKa4Y",
  database: "akbari-realestate",
});

const getCustomers = async function () {
  let query = `call GET_CUSTOMERS_V1();`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const addCustomer = async function (params) {
  let query = `call ADD_CUSTOMER(?,?,?,?,?);`;
  return new Promise(function (resolve, reject) {
    mySqlCon.query(
      query,
      [
        params.propertyId,
        params.firstName,
        params.lastName,
        params.phone,
        params.mobile,
      ],
      (err, results, fields) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        [res] = JSON.parse(res);

        return resolve(res);
      }
    );
  });
};

const exportToExcel = async function (params) {
  let query = " call GET_CUSTOMERS_FOR_EXCEL()";
  return new Promise(function (resolve, reject) {
    mySqlCon.query(query, (err, results, fields) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

const exportToExcelProperty = async function (params) {
  let query = " call GET_PROPERTIES_FOR_EXCEL()";
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
  getCustomers,
  addCustomer,
  exportToExcel,
  exportToExcelProperty,
};
