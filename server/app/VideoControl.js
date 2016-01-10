// Dependencies
var express = require('express'),
    OpenTok = require('opentok');


var sessionId = '2_MX40NTQ1ODg5Mn5-MTQ1MjI5MDU2OTAxMX5yZ2g0MXRyUzkxT2pXMVExQ1Bwc2dqZWV-UH4';

// Verify that the API Key and API Secret are defined
var apiKey = '45458892',
    apiSecret = '4067bddd51a0b89330b6c2e9cdf984d5c2827afa';

if (!apiKey || !apiSecret) {
    console.log('You must specify API_KEY and API_SECRET environment variables');
    process.exit(1);
}

// Initialize OpenTok
var opentok = new OpenTok(apiKey, apiSecret);


// Create a session and store it in the express app
//opentok.createSession(function(err, session) {
//    if (err) throw err;
//    // app.set('sessionId', session.sessionId);
//});


function getVideoSession (callback) {
    // var sessionId = session.sessionId
    var token = opentok.generateToken(sessionId);

    var videoSession = new Object();
    videoSession.sessionId = sessionId;

    videoSession.token = token;
    videoSession.apiKey = apiKey;

    return callback(videoSession);
}


exports.getVideoSession = getVideoSession;