const { bookService } = require("../services");
const { UserNotFoundErr } = require("../errors/userNotFound");

// CREATE A BOOK //
const createBook = async (res, req) => {
  const { isbn, name, author, year, bookstore } = req.body;
  try {
    if ( !isbn || !name || !author || !year || !bookstore ) {
      return res.status(404).json({ error: "Completar todos los campos" });;
    };
    const newBook = await bookService.createBook({
      isbn,
      name,
      author,
      year,
      bookstore
    });
    res.status(201).json(newBook);
  } catch (error) {
    if (error instanceof UserNotFoundErr) {
      res
      .status(400)
      .json({ message: `El libro con isbn: ${isbn} no existe` });
    }
  };
  res.send( response );
};


module.exports = { createBook };



