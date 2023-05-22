const bookProvider = require("../providers/bookProvider");
const userProvider = require("../providers/userProvider");

// const getBook = async (isbn) => {
//   return await bookProvider.getBook(isbn);
// };

// const getBooks = async (options) => {
//   return await bookProvider.getBooks(options);
// };

const createBook = async (book) => {
  const user = userProvider.getUser(book.UserId);
  return await bookProvider.createBook(book);
};

// const updateBook = async (isbn, book) => {
//   return await bookProvider.updateBook(isbn, book);
// };

// const deleteBook = async (isbn) => {
//   return await bookProvider.deleteBook(isbn);
// };

// const queryBook = (name) => {};

module.exports = { createBook };
