const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const { authMiddleware } = require("./middleware/authentication-jwt");
const { initializeDB } = require("./config/dbConfig");
const { bookRouter, authRouter, userRouter } = require("./routes");
const { mdwLogging } = require("./middleware");


app.use(express.json());
app.use(mdwLogging);
app.use("/user", authMiddleware, userRouter);
app.use("/book", authMiddleware, bookRouter);
app.use("/login", authRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(
    `Listening on port: ${PORT}`
  );
});
