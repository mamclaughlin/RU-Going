
// const LocalStrategy = require("passport-local").Strategy;
// const Sequelize     = require("../configs/dbconnection"),
// 	  model         = require("../models/model-index");
//
// const winston  = require("winston"),
//
// 	logger = new winston.Logger({
// 		level: "debug", // will log this and every level below it
// 		transports: [
// 			new (winston.transports.Console)(),
// 			new (winston.transports.File)({ filename: "./logs/log-test.log"})
// 			// AWS cloudwatch transport will go here
// 		]
// 	});
//
// module.exports = function(passport) {
//
// 	// serialize the user for the session
// 	passport.serializeUser(function(user, done) {
// 		done(null, user.id);
// 	});
//
// 	// deserialize user
// 	passport.deserializeUser(function(id, done) {
// 		model.User.findById(id, function(err, user) {
// 			done(err, user);
// 		})
// 	});
//
// 	// TODO: change this to use promises -kevh 5/31 @ 7:30 PM
// 	// TODO: check if correct info is being serialized into the user session
// 	// TODO: add further validation to user signup input
// 	// local auth strategy. using named strats instead of the default "local"
// 	passport.use("local-signup", new LocalStrategy({
// 		usernameField: "userName", // override username field with email
// 		passwordField: "password",
// 		passReqToCallback: true // pass entire req to callback
// 	},
// 		function(req, userName, password, done) { // since passReqToCallback is TRUE, we can access the req.body for more data
//
// 			process.nextTick(function() {
//
// 				model.User.find({
//
// 					where: Sequelize.Sequelize.or({ userName: userName}, { userEmail: req.body.email})
//
// 				}).then(function (user){
//
// 					// IF no user exists, create new user
// 					if (!user) {
// 						model.User.create({
//
// 							userEmail: req.body.email,
// 							userName : userName,
// 							userPass : password });
//
// 						logger.info("User " + userName +  " created successfully!");
// 						return done(null, user)
// 					}
//
// 					if (user) {
// 						// IF userEmail already exists
// 						if (user.userEmail === req.body.email) {
// 							logger.error("ERROR: email already exists for " + req.body.email);
// 							return done(null, false, req.flash("signupMessage", "Email already exists"));
// 						}
//
// 						// IF userName already exists
// 						if (user.userName === userName) {
// 							logger.error("ERROR: Username already exists for " + userName);
// 							return done(null, false, req.flash("signupMessage", "Username already exists"));
// 						}
// 					}
//
// 				}).catch(function (err) {
// 					logger.error(err);
// 				});
//
// 			});
//
// 		}
//
// 	));
//
// };