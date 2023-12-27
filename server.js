const dotenv = require('dotenv');

const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');

const app = express();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.prod' });

// connect to mySqlCon
const mySqlCon = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDB,
  port: process.env.PORTDB,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

mySqlCon.connect((err) => {
  if (err) return console.log('mysql connection error' + err);
  console.log('Successfully connected to mysql database!');
});

// Configure CORS to allow requests from your React development server

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3000/',
      'http://127.0.0.1:3000/',
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
