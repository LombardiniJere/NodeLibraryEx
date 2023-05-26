const passport = require("passport");

const authCheck = passport.authenticate("jwt", { session: false }); // req tiene un JWT autentificamos

module.exports = authCheck;