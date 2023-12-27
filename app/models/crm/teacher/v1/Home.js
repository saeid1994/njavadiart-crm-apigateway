const mysql = require('mysql2');

const dotenv = require('dotenv');

dotenv.config({ path: '.env.prod' });

const mySqlCon = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDB,
  port: process.env.PORTDB,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

// const mySqlCon = mysql.createConnection({
//   host: 'damavand.liara.cloud',
//   user: 'root',
//   port: 30111,
//   password: 'u9DW7y7t2sJR4lZiLNQekXbh',
//   database: 'crm',
// });

const GetStudents = async function () {
  const query = `call GET_STUDENTS_v1()`;
  return new Promise((resolve, reject) => {
    mySqlCon.query(query, (err, results) => {
      if (err) return reject(err);
      let res = JSON.stringify(results[0]);
      res = JSON.parse(res);
      return resolve(res);
    });
  });
};

module.exports = {
  GetStudents,
};
