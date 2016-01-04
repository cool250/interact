// api.js

var express = require('express');
// var mongoose = require('mongoose');

var router = express.Router();


// mongoose.connect('mongodb://test:test@ds047762.mongolab.com:47762/chain');
 
 
// --------------- API Routes Start ----------------------
// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
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
