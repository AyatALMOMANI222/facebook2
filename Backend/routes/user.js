const express = require("express");
const {
  createUser,
  updateUser,
  getAllUsers,
  deleteUserById,
  getUserById,
} = require("../controller/user");
const authentication = require("../middlewear/authentication");
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/", createUser);
userRouter.put("/updateUser",authentication, updateUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:user_id",authentication, getUserById);

userRouter.delete("/:user_id", deleteUserById);
module.exports = userRouter;
