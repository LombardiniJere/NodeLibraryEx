const { userProvider } = require("../providers");


const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUser = async (id) => {
  return await userProvider.getUser(id);
};

const getUsers = async (options) => {
  return await userProvider.getUsers(options);
};

const updateUser = async (id, user) => {
  return await userProvider.updateUser(id, user);
};

const deleteUser = async (id) => {
  return await userProvider.deleteUser(id);
};


module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };
