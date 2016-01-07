var express = require("express");
var app     = express();
var path    = require("path");
var open    = require("open");

// API Routes
var api = require('./server/routes/api');

// REGISTER OUR ROUTES -------------------------------
// all of our API routes will be prefixed with /v1
app.use('/api/v1', api);

// Add static middleware for other static application file
app.use('/', express.static(__dirname + '/web'));

var port = process.env.PORT || 5000;

app.listen(port, 'localhost', function() {
    console.log("Running on Port " + port);
    console.log("Launching browser");
    // open('http://localhost:'+ port); - crashes process on heroku server
});
