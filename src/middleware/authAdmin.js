const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "secretPass"; // clave que solamente sabe el Server

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  //extrae el bearer token del header
      secretOrKey: secret,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

// authIsAdmin able to create-delete user
const authIsAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(401).json({ error: "Usuario no es Admin" });
};


module.exports = { secret, authIsAdmin };
