const express = require("express");
const app = express();

app.use(express.json());

let port = 6000;

const { Client } = require("pg");

// Create a client using the connection information provided on bit.io.
const client = new Client({
  user: "GettingStarted",
  host: "db.bit.io",
  database: "Victorjota/musifydb", // public database
  password: "v2_3t74a_Kyh3qSGDNgHN87athHUF5pX", // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
});
client.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// client.query('SELECT * FROM "dliden/2020_Census_Reapportionment"."Historical Apportionment" limit 10;', (err, res) => {
//     console.table(res.rows); // you could also just console.log, but console.table is neat :)
// });

app.listen(port, () => {
  console.log("Server running in " + port);
});
