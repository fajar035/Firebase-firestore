const userRouter = require("express").Router();
const userController = require("../controllers/users.controller");

userRouter.get("/", userController.getAll);
userRouter.post("/", userController.store);
userRouter.get("/:id", userController.detail);
userRouter.delete("/:id", userController.delete);

module.exports = userRouter;
