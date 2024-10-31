const {POOL} = require('pg');
requyire('dotenv').config();

//postgresql connection parameters

const pool = new POOL({
  user: Process.env.DB_USER,
  host: Process.env.DB_HOST,
  database: Process.env.DB_NAME,
  password: Process.env.DB_PASS,
  port: Process.env.DB_PORT,
});

module.exports = { pool };