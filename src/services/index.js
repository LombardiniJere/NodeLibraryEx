const { getBook, getBooks, createBook, updateBook, deleteBook } = require("./bookService");
const { getUser, getUsers, createUser, updateUser, deleteUser } = require("./userService");
const { createLibrary, getLibrary, getLibraries, updateLibrary, deleteLibrary } = require("./libraryService");

module.exports = {
  bookService: { createBook, getBook, getBooks, updateBook, deleteBook },
  userService: { createUser, getUser, getUsers, updateUser, deleteUser },
  libraryService: { createLibrary, getLibrary, getLibraries , updateLibrary, deleteLibrary },
};