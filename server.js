// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var mongoose = require('mongoose');
var port = process.env.PORT || 3000; 

 //Database Connection
mongoose.connect('mongodb://rumeeting1:rumeetingrumeeting@ds027165.mlab.com:27165/meetru');

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/RU_Going/public')); 

//routing & schema for database
//model
 var entry = mongoose.model('entry', {
        name : String,        
        email: String,
        phone: String, 
        message: String
    });




app.get('/api/entries', function(req, res) {



        // use mongoose to get all todos in the database
        entry.find(function(err, data) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(data); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/entries', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        entry.create({
            name : req.body.name,        
            email: req.body.email,
            phone: req.body.phone, 
            message: req.body.message,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            entry.find(function(err, data) {
                if (err)
                    res.send(err)
                res.json(data);
            });

            
            


        });

    });

    // delete a todo
    app.delete('/api/entries/:entries_id', function(req, res) {
        entry.remove({
            _id : req.params.entries_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            entry.find(function(err, data) {
                if (err)
                    res.send(err)
                res.json(data);
            });
        });
    });

//connect to server
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);