const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Book = sequelize.define("Books", {
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
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
  },
  bookstore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Book;
