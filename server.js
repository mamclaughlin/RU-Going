const express      = require("express"),
      app          = express(),
	  PORT         = process.env.PORT || 3000,
	  http         = require("http"),
	  server       = http.createServer(app),
	  bodyParser   = require("body-parser"),
	  cookieParser = require("cookie-parser"),
	  path         = require("path"),
	  logger       = require("morgan")

const mysql        = require("mysql")
      //need MYSQL db
	  // db           = require("./beallies/models/model-index.js"); // index file that controls sequelize models

const mongo = require("mongodb"),
	  mongoose = require("mongoose");

const moment       = require("moment"),
	  now          = moment().format();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // choose whether to use "querystring" or "qs" parsing library
app.use(cookieParser("secret"));


app.use(express.static(__dirname + "RU_Going/public")); // default static folder
app.use("/node_modules", express.static(__dirname + "/node_modules")); // define static route for node modules, for a <script> link to angular for example
// app.use(express.static('public'));


// //Mongoose Database configuration -- CHANGE THIS TO WHATEVER WE USE
// mongoose.connect('mongodb://mariah:nodeuser@ds049925.mlab.com:49925/heroku_1rm9fzqq');
// var db = mongoose.connection;
//
// db.on('error', function (err) {
// 	console.log('Mongoose Error: ', err);
// });
// db.once('open', function () {
// 	console.log('Mongoose connection successful.');
// });



// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/RU_Going/public/index.html'));
	// res.send(index.html);
});

//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
