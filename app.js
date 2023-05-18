const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const { authMiddleware } = require("./src/middleware/authentication-jwt");
const { initializeDB } = require("./src/config/dbConfig");
const { bookRouter, authRouter, userRouter } = require("./src/routes");
const { mdwLogging } = require("./src/middleware");


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
