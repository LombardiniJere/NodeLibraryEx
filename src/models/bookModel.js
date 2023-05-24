const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const Library = require("./libraryModel");
const User = require("./userModel");


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
  libraryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Associations DB
Book.belongsTo(Library, {
  foreignKey: 'libraryId',
});

module.exports = Book;
