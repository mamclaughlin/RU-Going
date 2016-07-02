
// const express  = require("express"),
//       router   = express.Router(),
// 	  logger   = require("winston"),
// 	  passport = require("passport");
//
// const Sequelize      = require("../configs/dbconnection.js"); // replace with your dbconnection config
//       model          = require("../models/model-index");
//
// router.route("/users")
// 	.get(function(req, res) {
// 		model.User.findAll({
// 		})
// 		.then(function(data) {
// 			res.json(data);
// 		})
// 		.catch(function(err) {
// 			logger.error(err);
// 		});
// 	});
//
// router.route("/signup")
// 	.post(passport.authenticate("local-signup", {
// 		successRedirect: "/profile",
// 		failureRedirect: "/signup",
// 		failureFlash: true
// 	}));
//
// module.exports = router;