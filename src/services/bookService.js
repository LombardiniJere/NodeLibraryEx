const { bookProvider } = require("../providers");

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBook = async (isbn) => {
  return await bookProvider.getBook(isbn);
};

const getBooks = async (options) => {
  return await bookProvider.getBooks(options);
};

// const updateBook = async (id, book) => {
//   return await bookProvider.updateBook(id, book);
// };

// const deleteBook = async (id) => {
//   return await bookProvider.deleteBook(id);
// };


module.exports = { createBook, getBook, getBooks };
