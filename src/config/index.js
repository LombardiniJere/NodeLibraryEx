const sequelize = require("./dbConfig");
const initializeDB = require("./syncDB");

module.exports = { sequelize, initializeDB };
