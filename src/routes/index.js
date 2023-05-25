const bookRouter = require("./bookRoute");
const userRouter = require("./userRoute");
const libraryRouter = require("./libraryRoute");
const authAdminRouter = require("./authAdminRoute");

module.exports = { bookRouter, userRouter, authAdminRouter, libraryRouter };