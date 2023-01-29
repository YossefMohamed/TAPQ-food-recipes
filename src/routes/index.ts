import { Router } from "express";
import { recipeRouter } from "./recipeRoutes";
import { reviewRouter } from "./reviewRoutes";
import { userRouter } from "./userRoutes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/recipes", recipeRouter);
indexRouter.use("/reviews", reviewRouter);

export { indexRouter };
