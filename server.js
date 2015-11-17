var express = require("express");
var app     = express();
var path    = require("path");

// Add static middleware for node_modules files
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Add static middleware for other static application file
app.use('/web', express.static(__dirname + '/web'));

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Running on Port " + port);
