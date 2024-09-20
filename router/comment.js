const express = require("express");
const { getComments } = require("../controller/comments/getComments");
const { getComment } = require("../controller/comments/getComment");
const { addComment } = require("../controller/comments/addComment");
const { deleteComment } = require("../controller/comments/deleteComments");
const { deleteUser } = require("../controller/users/deleteUsers");
const { updateComments } = require("../controller/comments/updateComment");

const CommentRouter = express.Router();

CommentRouter.get("/comments", getComments)
  .get("/:id", getComment)
  .post("/", addComment)
  .delete("/:id", deleteComment)
  .put("/:id", updateComments);

module.exports = CommentRouter;
