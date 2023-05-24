const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const Library = sequelize.define("Libraries", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isNumeric: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 50,
      min: 3,
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
});

// Associations DB
// Library.hasMany(Book);

module.exports = Library;
// Libraries and Books:
// A library can have multiple books in its collection.