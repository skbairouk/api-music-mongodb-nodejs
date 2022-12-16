const userRouter = require('express').Router();

const userController = require("../controllers/userController");




userRouter.get('/', userController.getAllUsers);

userRouter.post("/add", userController.addUser);

userRouter.get("/:id", userController.getUserById);
userRouter.get("/:userId/playlist", userController.getPlaylistForUser);

userRouter.delete("/delete/:id", userController.deleteUser);

userRouter.put("/update/:id", userController.updateUser);



module.exports = userRouter;