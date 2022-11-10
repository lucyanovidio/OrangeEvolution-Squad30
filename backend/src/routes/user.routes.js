import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/api/user/login", UserController.login);
userRouter.post("/api/user/", UserController.register);
userRouter.put("/api/user/", UserController.editProfile);
userRouter.delete("/api/user/", UserController.delete);

export default userRouter;
