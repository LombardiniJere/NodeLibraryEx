const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const { authMiddleware } = require("./middleware/authentication-jwt");
const { initializeDB } = require("./config");
const { bookRouter, authRouter, userRouter } = require("./routes");
const { mdwLogging } = require("./middleware");


app.use(express.json());
app.use(mdwLogging);
app.use("/login", authRouter);
app.use("/user", authMiddleware, userRouter);
app.use("/book", bookRouter);



app.listen(PORT, async () => {
  await initializeDB();
  console.log(
    `Listening on port: ${PORT}`
  );
});
