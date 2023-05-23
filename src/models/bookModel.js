const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");



const Book = sequelize.define("Books", {
  isbn: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    validate: {
      isNumeric: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  library: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations DB
// User.hasMany(Book);
// Library.hasMany(Book);

module.exports = Book;
