const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { secret } = require("../middleware");
const { userProvider } = require("../providers");


router.post("/", async (req, res) => {
  const { user, password } = req.body;
  // Verificación de que los datos del usuario son correctos y devuelve un token ADMIN role

  if (user === "admin" && password === "admin") {
    const token = jwt.sign({ userName: user, role: "ADMIN" }, secret);
    res.json({ token });
  } else {
    const dbUser = await userProvider.validateUser(user, password); // si != ADMIN, se llama al userProvider para validar credenciales en la DB
    if (dbUser) {
      const token = jwt.sign({ userName: dbUser.email, role: "USER" }, secret);
      res.json({ token });
    } else {
      res.status(401).json({ message: "Authentification fail" });
    }
  }
});

module.exports = router;
