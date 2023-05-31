const express = require("express");
const router = express.Router();
const { bookService } = require("../services");
const { authIsAdmin } = require("../middleware");


// CREATE BOOK //
router.post("/", authIsAdmin, async (req, res) => {
  const { isbn, name, author, year, libraryId } = req.body;
  try {
    const newBook = await bookService.createBook({
      isbn,
      name,
      author,
      year,
      libraryId
    });
    res.status(201).json({ message: "Book successfully created", newBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred creating a Book", 
    error: error.message }
    );
  };
});

// GET BOOK BY ID //
router.get('/:bookId', async (req, res) => {
const bookId = req.params.bookId;
  try {
    const book = await bookService.getBook(bookId);
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


// UPDATE BOOK BY ID //
router.put('/:bookId', authIsAdmin, async (req, res) => {
  const bookId = req.params.bookId;
  const { isbn, name, author, year, libraryId } = req.body;
  try {
    const newBook = await bookService.updateBook(bookId, {
      isbn,
      name,
      author,
      year,
      libraryId
    });
    res.status(200).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE BOOK BY ID //
router.delete('/:bookId', authIsAdmin, async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const book = await bookService.deleteBook(bookId);
    res.status(200).json({ message: "Book successfully deleted", book });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


module.exports = router;