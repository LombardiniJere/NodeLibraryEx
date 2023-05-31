const passport = require("passport");

const authIsAdmin = (req, res, next) => {
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
      if (user.role === "ADMIN") {
        req.user = user;
        return next();
      }
      res.status(401).json({ error: "Not Admin" });
    }
  )(req, res, next);
};

module.exports = authIsAdmin;
