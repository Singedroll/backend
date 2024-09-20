const express = require("express");
const userRouter = require("./router/user");
const commentRouter = require("./router/comment");

const app = express();

app.use(express.json());

const port = 8080;
// app.use("/user", userRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
