//Requirements
const express      = require("express"),
      app          = express(),
	  PORT         = process.env.PORT || 3000,
	  bodyParser   = require("body-parser"),
	  mongo = require("mongodb"),
	  methodOverride = require('method-override'),
	  mongoose = require("mongoose"),
	  path = require("path"),
	  passport = require("passport");

//Setting up parsing to the client side 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override'));  // choose whether to use "querystring" or "qs" parsing library
app.use(express.static(__dirname + "/RU_Going/public/")); // default static folder

//Connecting to MongoDB
mongoose.connect('mongodb://rumeeting1:rumeetingrumeeting@ds027165.mlab.com:27165/meetru');
// Posting Entry Model for MongoDB
var entry = mongoose.model('entry', {
        Schoolname : String,        
        ZipCode: String,
        HexiDec: String, 
        Email: String,
        Password: String
    });

//Testing connection to MongoDB
var dbm = mongoose.connection;
dbm.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});
dbm.once('open', function () {
	console.log('Mongoose connection successful.');
});




//Routes Pushing to MongoDB
app.get('/api/entries', function(req, res) {
        // use mongoose to get all todos in the database
        entry.find(function(err, data) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(data); // return all todos in JSON format
        });
    });

//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
