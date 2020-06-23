// Set up MySQL connection.
var express = require("express")
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  PORT: 3306,
  user: "b31385e9079af8",
  password: "28e39d55",
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
