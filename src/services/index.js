const { getBook, getBooks, createBook, updateBook, deleteBook } = require("./bookService");
const { getUser, getUsers, createUser, updateUser, deleteUser } = require("./user");
const { createLibrary } = require("./libraryService");

module.exports = {
  bookService: { getBook, getBooks, createBook, updateBook, deleteBook },
  userService: { getUser, getUsers, createUser, updateUser, deleteUser },
  libraryService: { createLibrary },
};