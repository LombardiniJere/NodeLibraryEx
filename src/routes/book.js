const express = require("express");
const router = express.Router();
const bookService = require("../services/book");

// GET BOOK BY NAME //
router.get("/", (res, req) => {
  const { id, isbn, name, author, year, bookstore } = req.body;
  res.send({id, isbn, name, author, year, bookstore });
});

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

// GET BOOKs BY ISBN //
router.get('/', async (req, res) => {
  const { isbn, name, author } = req.query;
  try {
    let books;
    if (Object.keys(req.query).length !== 0) {
      books = await bookService.getBooks({
        ...(isbn && { isbn }),
        ...(name && { name }),
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
router.post("/", async (res, req) => {
  const { isbn, name, author, year, bookstore } = req.body;
  try {
    const newBook = await bookService.createBook({
      isbn,
      name,
      author,
      year,
      bookstore
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
  res.send( response );
});

// UPDATE BOOK BY ISBN //
router.put('/:bookIsbn', async (req, res) => {
  const bookIsbn = req.params.bookIsbn;
  const { isbn, name, author, year, bookstore } = req.body;
  try {
    const newBook = await bookService.updateBook(bookIsbn, {
      isbn,
      name,
      author,
      year,
      bookstore
    });
    res.status(200).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE BOOK BY ISBN //
router.delete('/:bookIsbn', async (req, res) => {
  const bookIsbn = req.params.bookIsbn;
  try {
    const book = await bookService.deleteBook(bookIsbn);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;