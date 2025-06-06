const fs = require("fs");
const path = require("path");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const sqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = sqlPool.promise();