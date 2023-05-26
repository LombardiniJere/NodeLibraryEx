const passport = require("passport");
const passportJwt = require("passport-jwt");


const authIsUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "USER" || req.user.role === "ADMIN") {  // admin & user can do same
    return next();
  }
  res.status(401).json({ error: "Not Authenticated" });
};


module.exports = authIsUser;
