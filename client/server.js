var express = require("express");
var app     = express();
var path    = require("path");

// Add static middleware for node_modules files
app.use('/web/node_modules', express.static(__dirname + '/node_modules'));

// Add static middleware for other static application file
app.use('/web', express.static(__dirname + '/web'));

app.listen(5000);

console.log("Running at Port 5000");
