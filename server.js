require('dotenv').config();

const mysql = require('mysql');
const cors = require('cors');
const express = require('express');

const app = express();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

// connect to mySqlCon
const mySqlCon = mysql.createConnection({
  host: 'polly.iran.liara.ir',
  user: 'root',
  port: '33395',
  password: 'vEdZyMLXlhFgBwguixMKKa4Y',
  database: 'akbari-realestate',
});

mySqlCon.connect((err) => {
  if (err) return console.log('mysql connection error' + err);
  console.log('Successfully connected to mysql database!');
});

// Configure CORS to allow requests from your React development server

app.use(
  cors({
    origin: [
      'https://estateirfront.iran.liara.run',
      'https://estateirfront.iran.liara.run/',
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3000/',
      'http://127.0.0.1:3000/',
      'http://192.168.0.102:3000/',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(expressValidator());

app.use('/api', routes);

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`),
);

module.exports = app;
