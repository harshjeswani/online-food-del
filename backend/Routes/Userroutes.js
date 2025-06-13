import { Router } from "express";
import { login, signup } from '../Controllers/UserController.js';

const userRouter = Router();

userRouter.get("/login", login);
userRouter.get("/signup", signup);

export default userRouter;
