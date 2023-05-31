const passport = require("passport");
const authCheck = require("./authCheck");
// authIsAdmin able to create-delete user
const authIsAdmin = (req, res, next) => {
  
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(401).json({ error: "Not authorized" });
};


module.exports = authIsAdmin;
