const { libraryModel } = require("../models");

const createLibrary = async (libraryOptions) => {
  try {
    const newLibrary = await libraryModel.create(libraryOptions);
    // const ticket = await Ticket.create({ used: false, UserId: newLibrary.id });
    return newLibrary;
  } catch (error) {
    throw error;
  }
};



module.exports = { createLibrary };