// Set up MySQL connection.
var express = require("express")
var router = express.Router
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "rootroot",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } 
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
