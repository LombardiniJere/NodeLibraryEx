const { bookService } = require("../services");
const { UserNotFoundErr } = require("../errors/userNotFound");

// CREATE A BOOK //
const createBook = async (req, res) => {
  const { user } =  req; // extraigo el user del req, se puede usar para ver quien creo libro-library
  const { isbn, name, author, year, library } = req.body;
  try {
    if ( !isbn || !name || !author || !year || !library ) {
      return res.status(404).json({ error: "Completar todos los campos" });;
    };
    const newBook = await bookService.createBook({
      isbn,
      name,
      author,
      year,
      library
    });
    console.log( `Usuario ${user.userName} creo ${newBook.isbn} libro` );
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



