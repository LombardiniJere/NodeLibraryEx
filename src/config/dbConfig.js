const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ({
  dialect: "sqlite",       // dialecto que maneja la base de datos
  storage: "./database.sqlite",  // donde va a almacenar la data
});

module.exports = sequelize;