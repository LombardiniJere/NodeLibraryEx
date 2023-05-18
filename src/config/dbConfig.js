const { Sequelize } = require("sequelize");

const sequelize = new Sequelize ({
  dialect: "sqlite",       // dialecto que maneja la base de datos
  storage: "./database.sqlite",  // donde va a almacenar la data
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la DB establecida");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Hubo un error al inicializar la DB");
  }
};

module.exports = { sequelize, initializeDB };