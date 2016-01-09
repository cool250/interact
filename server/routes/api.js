// api.js

var express = require('express');
// var mongoose = require('mongoose');

var router = express.Router();
var VideoControl = require('../app/VideoControl.js');



// mongoose.connect('mongodb://test:test@ds047762.mongolab.com:47762/chain');
 
 
// --------------- API Routes Start ----------------------
// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.route('/session')

    // get API root context
    .get(function(req, res) {
        console.log ("In startVideo");

        VideoControl.getVideoSession( function (error, body) {
            if(error)
                res.json(error);
            else
                res.json(body);
        }

    );
});

router.route('/')

    // get API root context
    .get(function(req, res) {

        res.json({ message: 'hooray! welcome to our api!' });
    });


// Get Interview Details
// @TODO hardcoded for testing
router.route('/interview/:interview_id/')

    // get the asset with that id 
    .get(function(req, res) {
        res.json({ success : "true" });  
});
// --------------- API Routes End ----------------------

module.exports = router;
