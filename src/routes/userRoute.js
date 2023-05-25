const express = require('express');
const { userService } = require("../services");
const router = express.Router();

/* GET USER BY ID */
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

/* GET USERs BY NAME */
router.get('/', async (req, res) => {
  const { name, email } = req.query;
  try {
    let users;
    if (Object.keys(req.query).length !== 0) {
      users = await userService.getUsers({
        ...(name && { name }),
        ...(email && { email }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      users = await userService.getUsers();
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

/* CREATE USER */
router.post('/', async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const newUser = await userService.createUser({
      name,
      lastName,
      email,
      password
    });
    res.status( 201 ).json( { message: "User successfully created", newUser } );
  } catch (error) {
    res.status( 500 ).json({ message: "An error occurred", error: error.message });
  };
});

/* UPDATE USER */
router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { name, lastName, email, password } = req.body;
  try {
    const newUser = await userService.updateUser(userId, {
      name,
      lastName,
      email,
      password,
    });
    res.status(200).json({ message: "User successfully updated", newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

/* DELETE USER */
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.deleteUser(userId);
    res.status(201).json({ message: "User successfully deleted", user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


module.exports = router;