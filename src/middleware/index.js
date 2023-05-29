const mdwLogging = require("./logging");
<<<<<<< HEAD
const authIsAdmin = require("./authAdmin");
const authIsUser = require("./authUser");
const authCheck  = require("./authCheck");
const secret  = require("./jwtStrategy");

module.exports = { mdwLogging, authCheck, authIsAdmin, authIsUser, secret };
=======
const { secret, authMiddleware, authIsAdmin, authIsUser } = require("./authAdmin");
const { authIsUser } = require("./authUser");

module.exports = { mdwLogging, secret, authMiddleware, authIsAdmin, authIsUser };
>>>>>>> parent of 0c93936... more modifications authentications
