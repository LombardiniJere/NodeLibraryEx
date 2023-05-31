
const passport = require("passport");


const authIsUser = (req, res, next) => {
  return passport.authenticate(
    "jwt",
    {
      session: false,
    },
    (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (req.isAuthenticated() && req.user.role === "USER") {
        req.user = user;
        return next();
      }
      res.status(401).json({ error: "Not authorized" });
    }
  )(req, res, next);
};

module.exports = authIsUser;
