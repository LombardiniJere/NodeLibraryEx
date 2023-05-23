const express = require("express");
const router = express.Router();
const bookService = require("../services/bookService");


// GET BOOK BY ISBN //
router.get('/:bookIsbn', async (req, res) => {
const bookIsbn = req.params.bookIsbn;
  try {
    const book = await bookService.getBook(bookIsbn);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET BOOKs BY NAME, AUTHOR, ISBN //
router.get('/', async (req, res) => {
  const { name, isbn, author } = req.query;
  try {
    let books;
    if (Object.keys(req.query).length !== 0) {
      books = await bookService.getBooks({
        ...(name && { name }),
        ...(isbn && { isbn }),
        ...(author && { author }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      books = await bookService.getBooks();
    };
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
});

// CREATE BOOK //
router.post("/", async (req, res) => {
  const { isbn, name, author, year, library } = req.body;
  try {
    const newBook = await bookService.createBook({
      isbn,
      name,
      author,
      year,
      library
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  };
});

// // UPDATE BOOK BY ISBN //
// router.put('/:bookId', async (req, res) => {
//   const bookId = req.params.bookId;
//   const { isbn, name, author, year, library } = req.body;
//   try {
//     const newBook = await bookService.updateBook(bookId, {
//       isbn,
//       name,
//       author,
//       year,
//       bookstore
//     });
//     res.status(200).json(newBook);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // DELETE BOOK BY ISBN //
// router.delete('/:bookId', async (req, res) => {
//   const bookId = req.params.bookId;
//   try {
//     const book = await bookService.deleteBook(bookId);
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


module.exports = router;