const userRouter = require("./userRoute");
const libraryRouter = require("./libraryRoute");
const bookRouter = require("./bookRoute");
const authAdminRouter = require("./authAdminRoute");

module.exports = { userRouter, authAdminRouter, libraryRouter, bookRouter };