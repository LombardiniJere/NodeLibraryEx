const passport = require("passport");


const authMiddleware = passport.authenticate("jwt", { session: false }); // req tiene un JWT autentificamos

// authIsAdmin able to create-delete user
const authIsAdmin = (req, res, next) => {
  const { user } = req.body;
  
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(401).json({ error: "Not authorized" });
};


<<<<<<< HEAD
module.exports = authIsAdmin;
=======
module.exports = { secret, authMiddleware, authIsAdmin };
>>>>>>> parent of 0c93936... more modifications authentications
