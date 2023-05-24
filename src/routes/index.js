const bookRouter = require("./bookRoute");
const userRouter = require("./userRoute");
const libraryRouter = require("./libraryRoute");
const authRouter = require("./authAdmin");

module.exports = { bookRouter, userRouter, authRouter, libraryRouter };