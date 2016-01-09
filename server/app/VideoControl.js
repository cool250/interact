// Dependencies
var express = require('express'),
    OpenTok = require('opentok');

// Verify that the API Key and API Secret are defined
var apiKey = '45458892',
    apiSecret = '4067bddd51a0b89330b6c2e9cdf984d5c2827afa';

if (!apiKey || !apiSecret) {
    console.log('You must specify API_KEY and API_SECRET environment variables');
    process.exit(1);
}

// Initialize OpenTok
var opentok = new OpenTok(apiKey, apiSecret);


function getVideoSession (callback) {
    // Create a session and store it in the express app
    opentok.createSession(function(err, session) {
        if (err) return callback(err);

        var sessionId = session.sessionId
        token = opentok.generateToken(sessionId);

        var videoSession = new Object();
        videoSession.sessionId = session.sessionId;

        videoSession.token = token;
        videoSession.apiKey = apiKey;

        return callback(err, videoSession);

    });
};

exports.getVideoSession = getVideoSession;