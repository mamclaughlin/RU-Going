// *********************************************************************************
// university.JS - THIS FILE CREATES A MODEL OF THE TABLE
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// seqModel (lowercase) references my connection to the DB with sequelize model.
var seqModel = require("../config/connection.js");

// Creates a sequelTableModel model that matches up with DB
var foodTableModel = seqModel.define("universitytable", {


        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        university: {
            type: Sequelize.STRING,
        },

        zip: {
            type: Sequelize.STRING,
        },

        colors: {
            type: Sequelize.STRING,
        },

        password: {
            type: Sequelize.STRING,
        },

        email: {
            type: Sequelize.STRING,
        },

    },

    {
        timestamps: false, //eliminates the updatedAt and createdAt that sequel creates by default.
    });

// Syncs with DB
Meetup.sync();

// Makes the foodTableModel available for other files (will also create a table)
module.exports = universityTableModel;
