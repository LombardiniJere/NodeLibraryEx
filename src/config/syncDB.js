const sequelize = require("./dbConfig");


const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la DB establecida");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Hubo un error iniciando DB");
  }
};

module.exports = initializeDB;