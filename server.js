//Requirements
const express      = require("express"),
      app          = express(),
	  PORT         = process.env.PORT || 3000,
	  http         = require("http"),
	  server       = http.createServer(app),
	  bodyParser   = require("body-parser"),
	  cookieParser = require("cookie-parser"),
	  path         = require("path"),
	  logger       = require("morgan");
const mysql        = require("mysql"); 
const mongo = require("mongodb"),
	  mongoose = require("mongoose");
const moment       = require("moment"),
	  now          = moment().format();

//Setting up parsing to the client side 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // choose whether to use "querystring" or "qs" parsing library
app.use(cookieParser("secret"));
app.use(express.static(__dirname + "RU_Going/public")); // default static folder
app.use("/node_modules", express.static(__dirname + "/node_modules"));


//Connecting to MongoDB
mongoose.connect('mongodb://rumeeting1:rumeetingrumeeting@ds027165.mlab.com:27165/meetru');

//Testing connection to MongoDB
var dbm = mongoose.connection;
dbm.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});
dbm.once('open', function () {
	console.log('Mongoose connection successful.');
});

//Getting MySQL Connection
var models = require('./RU_Going/configs/connection.js');


// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/RU_Going/public/index.html'));
	// res.send(index.html);
});



//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
