import { Router } from "express";
import { protect } from "../../middlewares/auth";
import { requireLogin } from "../../middlewares/protect-route";
import { editUserRouter } from "./editUser";
import { getAllUsersRouter } from "./getAllUsers";
import { getCurrentUserRouter } from "./getCurrentUser";
import { getUserRouter } from "./getUser";
import { signinRouter } from "./signin";
import { signupRoutes } from "./signup";

const userRouter = Router();
userRouter.use(signinRouter);
userRouter.use(signupRoutes);

userRouter.use(requireLogin);
userRouter.use(getAllUsersRouter);
userRouter.use(editUserRouter);
userRouter.use(getCurrentUserRouter);
userRouter.use(getUserRouter);

export { userRouter };
