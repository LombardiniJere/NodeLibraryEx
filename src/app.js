const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const { authCheck } = require("./middleware");
const { initializeDB } = require("./config");
const { bookRouter, authAdminRouter, userRouter, libraryRouter } = require("./routes");
const { mdwLogging } = require("./middleware");


app.use(express.json());
app.use(mdwLogging);
app.use("/login", authAdminRouter);
app.use("/user", authCheck, userRouter);
app.use("/library", libraryRouter);
app.use("/book", bookRouter);



app.listen(PORT, async () => {
  await initializeDB();
  console.log(
    `Listening on port: ${PORT}`
  );
});
