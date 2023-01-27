import { Router } from "express";
import { protect } from "../../middlewares/auth";
import { createRecipeRouter } from "./createRecipe";
import { getRecipeRouter } from "./getRecipe";

const recipeRouter = Router();
recipeRouter.use(createRecipeRouter);
recipeRouter.use(getRecipeRouter);

export { recipeRouter };
