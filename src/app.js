const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const { initializeDB } = require("./config");
const { mdwLogging, authCheck, authIsAdmin } = require("./middleware");
const { authAdminRouter, bookRouter, userRouter, libraryRouter } = require("./routes");


app.use(express.json());
app.use(mdwLogging);
app.use("/login", authAdminRouter);
app.use("/library",authIsAdmin, libraryRouter);
app.use("/user", authIsAdmin, userRouter);
app.use("/book", bookRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(
    `Listening on port: ${PORT}`
  );
});
