const { getBook, getBooks, createBook, updateBook, deleteBook } = require("./book");
const { getUser, getUsers, createUser, updateUser, deleteUser } = require("./user");


module.exports = {
  bookService: { getBook, getBooks, createBook, updateBook, deleteBook },
  userService: { getUser, getUsers, createUser, updateUser, deleteUser },
};