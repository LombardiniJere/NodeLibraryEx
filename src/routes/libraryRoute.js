const express = require('express');
const libraryService = require("../services/libraryService");
const router = express.Router();


/* CREATE LIBRARY */
router.post('/library', async (req, res) => {
  const { name, location, phone } = req.body;
  try {
    const newLibrary = await libraryService.createLibrary({
      name,
      location,
      phone,
    });
    res.status( 201 ).json(newLibrary);
  } catch (error) {
    res.status( 500 ).json({
      message: error.message
    });
  };
});

// GET LIBRARY BY ID //
router.get('/:libraryId', async (req, res) => {
  const libraryId = req.params.libraryId;
    try {
      const library = await libraryService.getLibrary(libraryId);
      res.status(201).json(library);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// GET LIBRARIES BY NAME, ID //
router.get('/', async (req, res) => {
  const { name, id } = req.query;
  try {
    let libraries;
    if (Object.keys(req.query).length !== 0) {
      libraries = await libraryService.getLibraries({
        ...(name && { name }),
        ...(id && { id }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      libraries = await libraryService.getLibraries();
    };
    res.status(200).json(libraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
});


// // Find all users
// const libraries = await Library.findAll();
// console.log(libraries.every(library => library instanceof Library)); // true
// console.log("All users:", JSON.stringify(libraries, null, 2));

module.exports = router;
