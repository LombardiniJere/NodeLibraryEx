const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const Library = require("./libraryModel");


const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isNumeric: true,
    },
  },
  isbn: {
    type: DataTypes.INTEGER,
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
  }
});

// Associations DB
Book.belongsTo(Library, {
  foreignKey: 'libraryId',
  onDelete: 'CASCADE',
});

Library.hasMany(Book);

module.exports = Book;
