const { Op } = require("sequelize");
const { Book } = require("../models");

const createBook = async (bookOptions) => {
  try {
    const newBook = await Book.create(bookOptions);
    // const ticket = await Ticket.create({ used: false, BookIsbn: newBook.isbn });
    return newBook;
  } catch (error) {
    throw error;
  }
};

const getBook = async (isbn) => {
  try {
    const book = await Book.findByPk(isbn, { include: [{ all: true }] });
    if (book) {
      return book;
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

const getBooks = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const Books = await Book.findAll(options);

    if (Books) {
      return Books;
    } else {
      throw new Error(
        "No se encontraron books con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};

const updateBook = async (bookIsbn, bookOptions) => {
  try {
    await getBook(bookIsbn);
    const [numRowsUpdated] = await Book.update(bookOptions, {
      where: { isbn: bookIsbn },
    });
    console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
    return Book.findByPk(bookIsbn);
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (bookIsbn) => {
  try {
    return Book.destroy({ where: { isbn: bookIsbn } });
  } catch (error) {
    throw error;
  }
};

const validateBook = async (isbn) => {
  try {
    const book = await Book.findOne({
      where: { isbn },
    });
    if (book) {
      return book;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
  validateBook,
};