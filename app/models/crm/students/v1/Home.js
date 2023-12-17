const mysql = require('mysql2');

const mySqlCon = mysql.createConnection({
  host: 'polly.iran.liara.ir',
  user: 'root',
  port: '33395',
  password: 'vEdZyMLXlhFgBwguixMKKa4Y',
  database: 'akbari-realestate',
});

const GetResultOfAdvanceSearch = async function (params) {
  const query = `call GET_SEARCHADVANCERESULT_V1(?,?,?,?,?,?,?,?,?,?)`;
  return new Promise((resolve, reject) => {
    mySqlCon.query(
      query,
      [
        params.fromMeter,
        params.toMeter,
        params.fromPrice,
        params.toPrice,
        params.fromYear,
        params.toYear,
        params.statusOfProperty || 1,
        params.propertyType || 'آپارتمان',
        params.pageNum,
        params.recordsPerPage,
      ],
      (err, results) => {
        if (err) return reject(err);
        let res = JSON.stringify(results[0]);
        res = JSON.parse(res);
        return resolve(res);
      },
    );
  });
};

module.exports = {
  GetResultOfAdvanceSearch,
};
