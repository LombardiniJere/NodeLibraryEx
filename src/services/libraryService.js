
const libraryProvider = require("../providers/libraryProvider");


const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

// const getLibrary = async (id) => {
//   return await userProvider.getUser(id);
// };

// const getUsers = async (options) => {
//   return await userProvider.getUsers(options);
// };

// const updateUser = async (id, user) => {
//   return await userProvider.updateUser(id, user);
// };

// const deleteUser = async (id) => {
//   return await userProvider.deleteUser(id);
// };


module.exports = { createLibrary };
