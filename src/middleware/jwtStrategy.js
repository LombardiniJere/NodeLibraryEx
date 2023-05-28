const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "secretPass"; // clave que solamente sabe el Server

// Config de estrategia de autentificacion con JWT-passport, 
// verificamos y decodificamos el token JWT en el header y 
// luego se pasa, ya decodificado el token (jwtPayload), al objeto user para los siguentes pasos. 
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  //extraer el bearer token del header
      secretOrKey: secret,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

module.exports = secret;
