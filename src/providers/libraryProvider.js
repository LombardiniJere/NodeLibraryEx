const { Op } = require("sequelize");
const { libraryModel } = require("../models");

// CREATE LIBRARY //
const createLibrary = async (libraryOptions) => {
  try {
    const newLibrary = await libraryModel.create(libraryOptions);
    return newLibrary;
  } catch (error) {
    throw error;
  }
};

// GET LIBRARY BY ID //
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
        "No library found with this criteria"
      );
    }
  } catch (error) {
    throw error;
  }
};

// UPDATE LIBRARY //
const updateLibrary = async (libraryId, libraryOptions) => {
  try {
    await getLibrary(libraryId);
    const [numRowsUpdated] = await libraryModel.update(libraryOptions, {
      where: { id: libraryId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return libraryModel.findByPk(libraryId);
  } catch (error) {
    throw error;
  }
};

// DELETE LIBRARY //
const deleteLibrary = async (id) => {
  try {
    return libraryModel.destroy({ where: { id } });
  } catch (error) {
    throw error;
  }
};

module.exports = { createLibrary, getLibrary, getLibraries, updateLibrary, deleteLibrary };