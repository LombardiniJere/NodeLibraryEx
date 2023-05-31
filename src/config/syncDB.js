const sequelize = require("./dbConfig");

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB established");
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Synchronizing DB failed", error);
  }
};

module.exports = initializeDB;
