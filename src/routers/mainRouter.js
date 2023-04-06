const express = require("express");
const userRouter = require("./users.router");
const mainRouter = express.Router();

mainRouter.use("/users", userRouter);

module.exports = mainRouter;
