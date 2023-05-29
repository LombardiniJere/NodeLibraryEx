const passport = require("passport");

// authIsAdmin able to create-delete user
const authIsAdmin = (req, res, next) => {
  const { user } = req.body;
  
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(401).json({ error: "Not authorized" });
};


module.exports = authIsAdmin;
