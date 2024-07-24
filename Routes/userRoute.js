const express = require('express');
const { isAuth, generateToken } = require('../utils');


const userRouter = express.Router();

userRouter.get("/seed", UserController.createAllUsers);
userRouter.post("/signin", UserController.userSignIn);
userRouter.post("/register", UserController.userRegister);
userRouter.get("/allUsers", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserByID);
userRouter.put("/:id", UserController.updateUserByID);
userRouter.delete("/:id", UserController.deleteUserByID);

module.exports = userRouter;