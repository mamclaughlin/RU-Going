
// const express = require("express"),
// 	  router  = express.Router(),
// 	  logger  = require("winston");
//
// router.route("/")
// 	.get(function(req, res) {
// 		res.render("home");
// 	});
//
// router.route("/login")
// 	.get(function(req, res) {
// 		res.render("login", {message: req.flash("loginMessage")});
// 	});
//
// router.route("/signup")
// 	.get(function(req, res) {
// 		res.render("signup", {message: req.flash("signupMessage")});
// 	});
//
// router.route("/profile")
// 	.get(isLoggedIn, function(req, res) {
// 		res.render("profile", {user: req.user});
// 	});
//
// router.route("/logout")
// 	.get(function(req, res) {
// 		req.logout();
// 		res.redirect("/");
// 	});
//
// // middleware to check if a user is logged in. if they try to access the profile route and are not loggedIn, they will be sent back to the home page
// function isLoggedIn(req, res, next) {
// 	if (req.isAuthenticated())
// 		return next();
//
// 	res.redirect("/");
// }
//
// module.exports = router;