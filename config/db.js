const mysql = require("mysql");

const connection = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b3bbddd14b9ac1",
  password: "c393ef06",
  database: "heroku_b042b1619dc1c10",
});

// mysql://b3bbddd14b9ac1:c393ef06@us-cdbr-east-03.cleardb.com/heroku_b042b1619dc1c10?reconnect=true

module.exports = connection;
