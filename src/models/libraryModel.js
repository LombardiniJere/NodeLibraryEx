const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");


const Library = sequelize.define("Libraries", {
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
    validate: {
      max: 100,
      min: 3,
    },
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

Library.hasMany(Book, {
  foreignKey: 'libraryId',
  onDelete: 'CASCADE',
});

// The foreignKey option specifies the foreign key column to be used in the Book model to establish the relationship. 
// The onDelete: 'CASCADE' option ensures that if a library is deleted, all associated books will be deleted as well.


// Libraries and Books:
// A library can have multiple books in its collection.
// A book belongs to a single library.