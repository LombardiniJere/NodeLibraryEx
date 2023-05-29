const express = require("express");
const app = express();
<<<<<<< HEAD
=======
const PORT = process.env.PORT || 8888;
const { authMiddleware } = require("./middleware");
>>>>>>> parent of 0c93936... more modifications authentications
const { initializeDB } = require("./config");
const PORT = process.env.PORT || 8888;
const { mdwLogging, authCheck } = require("./middleware");
const { authAdminRouter, bookRouter, userRouter, libraryRouter } = require("./routes");


app.use(express.json());
app.use(mdwLogging);
app.use("/login", authAdminRouter);
<<<<<<< HEAD
=======
app.use("/user", authMiddleware, userRouter);
>>>>>>> parent of 0c93936... more modifications authentications
app.use("/library", libraryRouter);
app.use("/user", authCheck, userRouter);
app.use("/book", bookRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(
    `Listening on port: ${PORT}`
  );
});
