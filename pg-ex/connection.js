const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "",
  ssl: false
});

module.exports = credentials;