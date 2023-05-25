const bookRouter = require("./bookRoute");
const userRouter = require("./userRoute");
const libraryRouter = require("./libraryRoute");
const authAdminRoute = require("./authAdminRoute");

module.exports = { bookRouter, userRouter, authAdminRoute, libraryRouter };