const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./config/db");
// const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// // declare react files in build as static
// app.use(express.static(path.join(__dirname, "build")));

// // serve index.html from the build folder
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/history", (req, res) => {
  const QUERY_LAST_10_CALCULATIONS = `SELECT * FROM (
   SELECT * FROM calchistory ORDER BY id DESC LIMIT 10
)Var1
   ORDER BY id DESC`;
  connection.query(QUERY_LAST_10_CALCULATIONS, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(response);
    }
  });
});

app.post("/addCalculation", (req, res) => {
  console.log(req.body);
  const ADD_CALCULATION_QUERY = `insert into calchistory (calculation) values ('${req.body.calculation}')`;
  connection.query(ADD_CALCULATION_QUERY, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Calculation Added");
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
