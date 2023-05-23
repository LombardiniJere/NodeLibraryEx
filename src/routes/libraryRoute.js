const express = require('express');
const { libraryService } = require("../services");
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





module.exports = router;
