const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const User = sequelize.define("Users", {
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
      isAlpha: true,
      max: 50,
      min: 3,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      max: 50,
      min: 3,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      max: 50,
      min: 3,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 50,
      min: 3,
    },
  },
});


module.exports = User;
