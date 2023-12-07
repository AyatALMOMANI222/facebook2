const express = require("express");
const createComment=require("../controller/comment")
 const commentRouter = express.Router();
commentRouter.post("/", createComment)

module.exports = commentRouter;
