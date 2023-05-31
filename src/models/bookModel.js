const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const Library = require("./libraryModel");


const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
});

const bookLibraryColumn = "libraryId";

// Associations DB
Book.belongsTo(Library, {
  foreignKey: bookLibraryColumn,
  onDelete: "CASCADE",
});

Library.hasMany(Book, { foreignKey: bookLibraryColumn });


module.exports = Book;
