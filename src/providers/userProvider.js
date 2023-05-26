const { Op } = require("sequelize");
const { userModel, Ticket } = require("../models");
const { UserNotFoundErr } = require("../errors/userNotFound");


const createUser = async (userOptions) => {
  try {
    const newUser = await userModel.create(userOptions);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await userModel.findByPk(id, { include: [{ all: true }] });
    if (user) {
      return user;
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

const getUsers = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const users = await userModel.findAll(options);

    if (users) {
      return users;
    } else {
      throw new Error(
        "No se encontraron usuarios con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, userOptions) => {
  try {
    await getUser(userId);
    const [numRowsUpdated] = await userModel.update(userOptions, {
      where: { id: userId },
    });
    console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
    return userModel.findByPk(userId);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    return userModel.destroy({ where: { id: userId } });
  } catch (error) {
    throw error;
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await userModel.findOne({
      where: { email, password },
    });
    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  validateUser,
};