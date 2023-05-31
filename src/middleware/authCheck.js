const passport = require("passport");

const authCheck = passport.authenticate("jwt", { session: false }); // req tiene un JWT entonces autenticamos

module.exports = authCheck;