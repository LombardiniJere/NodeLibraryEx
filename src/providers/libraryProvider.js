const { Op } = require("sequelize");
const { libraryModel } = require("../models");

const createLibrary = async (libraryOptions) => {
  try {
    const newLibrary = await libraryModel.create(libraryOptions);
    return newLibrary;
  } catch (error) {
    throw error;
  }
};


const getLibrary = async (id) => {
  try {
    const library = await libraryModel.findByPk(id, { include: [{ all: true }] });
    if (library) {
      return library;
    } else {
      throw new Error("Library not found");
    }
  } catch (error) {
    throw error;
  }
};

const getLibraries = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const Libraries = await libraryModel.findAll(options);

    if (Libraries) {
      return Libraries;
    } else {
      throw new Error(
        "No se encontraron librerias con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};


module.exports = { createLibrary, getLibrary, getLibraries };