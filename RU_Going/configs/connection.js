
//
// const Sequelize = require("sequelize"),
// 	  logger    = require("winston");
//
// var db = new Sequelize("beallies", "beallies", "Iron_1_Cloud", {
//
// 	host: "beallies-1.cluster-cnxvffnypwe9.us-east-1.rds.amazonaws.com",
// 	port: 3306,
// 	dialect: "mysql",
// 	timezone: "America/New_York",
//
// 	define: {
// 		timestamps: false // true by default. these can be set on every sequelize .define
// 	}
// 	// host: "exampleconnection.mydbhost.com",
// 	// port: 3306,
// 	// dialect: "mysql",
// 	// timezone: "America/New_York",
//     //
// 	// define: {
// 	// 	timestamps: false // true by default. these can be set on every sequelize .define
// 	// }
//
// });
//
// db.authenticate().then(function (err) {
// 	if (err) {
// 		logger.error("SEQUELIZE CONNECTION ERROR - Please check your connection!");
// 	} else {
// 		logger.info("MySQL Connection Successful!");
// 	}
// });
//
// module.exports = {
//
// 	Sequelize,
// 	db
//
// };