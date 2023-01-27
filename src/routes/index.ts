import { Router } from "express";
import { recipeRouter } from "./recipeRoutes";
import { userRouter } from "./userRoutes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/recipes", recipeRouter);

export { indexRouter };
