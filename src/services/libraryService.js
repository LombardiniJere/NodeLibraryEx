
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

// const updateUser = async (id, user) => {
//   return await userProvider.updateUser(id, user);
// };

// const deleteUser = async (id) => {
//   return await userProvider.deleteUser(id);
// };


module.exports = { createLibrary, getLibrary, getLibraries};
