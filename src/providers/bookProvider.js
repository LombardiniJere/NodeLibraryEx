const { Op } = require("sequelize");
const { bookModel } = require("../models");

const createBook = async (bookOptions) => {
  try {
    const newBook = await bookModel.create(bookOptions);
    return newBook;
  } catch (error) {
    throw error;
  }
};

const getBook = async (id) => {
  try {
    const book = await bookModel.findByPk(id, { include: [{ all: true }] });
    if (book) {
      return book;
    } else {
      throw new Error("Book not Found on DB");
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
    const Books = await bookModel.findAll(options);

    if (Books) {
      return Books;
    } else {
      throw new Error(
        "No books were found with these criteria"
      );
    }
  } catch (error) {
    throw error;
  }
};

// const updateBook = async (bookId, bookOptions) => {
//   try {
//     await getBook(bookId);
//     const [numRowsUpdated] = await bookModel.update(bookOptions, {
//       where: { id: bookId },
//     });
//     console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
//     return bookModel.findByPk(bookId);
//   } catch (error) {
//     throw error;
//   }
// };

// const deleteBook = async (bookId) => {
//   const { name, libraryId } = req.body;
//   try {
//     console.log(`Book title: ${name} from ${libraryId} was deleted`);
//     return bookModel.destroy({ where: { id: bookId } });
//   } catch (error) {
//     throw error;
//   }
// };

// const validateBook = async (id) => {
//   try {
//     const book = await bookModel.findOne({
//       where: { id },
//     });
//     if (book) {
//       return book;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  createBook,
  getBook,
  getBooks,
};