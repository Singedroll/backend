const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUsers");
const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/", createUser)
  .delete("/:id", deleteUser);

module.exports = userRouter;
