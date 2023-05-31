
const { libraryProvider } = require("../providers");


const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibrary = async (id) => {
  return await libraryProvider.getLibrary(id);
};

const getLibraries = async (options) => {
  return await libraryProvider.getLibraries(options);
};

const updateLibrary = async (id, library) => {
  return await libraryProvider.updateLibrary(id, library);
};

const deleteLibrary = async (id) => {
  return await libraryProvider.deleteLibrary(id);
};


module.exports = { createLibrary, getLibrary, getLibraries, updateLibrary, deleteLibrary };
