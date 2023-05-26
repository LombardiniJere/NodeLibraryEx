const express = require('express');
const { libraryService } = require("../services");
const router = express.Router();
const { authIsAdmin } = require("../middleware");


/* CREATE LIBRARY */
router.post('/', authIsAdmin, async (req, res) => {
  const { name, location, phone } = req.body;
  try {
    if (req.user.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Only admin users can create a library' });
    }
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


module.exports = router;
