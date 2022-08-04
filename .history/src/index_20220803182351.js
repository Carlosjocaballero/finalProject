const express = require("express");
const app = express();

app.use(express.json());

let port = 6000;

const { Client } = require("pg");

// Create a client using the connection information provided on bit.io.
const client = new Client({});
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
