const express = require('express');
const { libraryService } = require("../services");
const router = express.Router();
const { authIsAdmin, authIsUser } = require("../middleware");


/* CREATE LIBRARY */
router.post('/', authIsAdmin, async (req, res) => {
  const { name, location, phone } = req.body;
  try {
    const newLibrary = await libraryService.createLibrary({
      name,
      location,
      phone,
    });
    res.status( 201 ).json({ message: "Library successfully created", newLibrary });
  } catch (error) {
    res.status( 500 ).json({ message: "An error occurred creating a Library", error: error.message }
    );
  };
});

// GET LIBRARY BY ID //
router.get('/:libraryId', authIsUser, async (req, res) => {
  const libraryId = req.params.libraryId;
    try {
      const library = await libraryService.getLibrary(libraryId);
      res.status(201).json(library);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// GET LIBRARIES BY NAME, ID //
router.get('/', authIsUser, async (req, res) => {
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

// UPDATE LIBRARY BY ID //
router.put('/:libraryId', authIsAdmin, async (req, res) => {
  const libraryId = req.params.libraryId;
  const { id , name, location, phone } = req.body;
  try {
    const newLibrary = await libraryService.updateLibrary(libraryId, {
      id,
      name,
      location,
      phone
    });
    res.status(200).json(newLibrary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE LIBRARY BY ID //
router.delete('/:libraryId', authIsAdmin, async (req, res) => {
  const libraryId = req.params.libraryId;
  try {
    const library = await libraryService.deleteLibrary(libraryId);
    res.status(200).json({ message: "Library successfully deleted", library });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

module.exports = router;
