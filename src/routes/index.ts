import { Router } from "express";
import { userRouter } from "./userRoutes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);

export { indexRouter };
