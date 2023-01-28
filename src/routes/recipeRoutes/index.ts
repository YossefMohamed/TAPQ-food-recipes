import { Router } from "express";
import { createRecipeRouter } from "./createRecipe";
import { getRecipeRouter } from "./getRecipe";
import { getRecipesRouter } from "./getRecipes";

const recipeRouter = Router();
recipeRouter.use(createRecipeRouter);
recipeRouter.use(getRecipeRouter);
recipeRouter.use(getRecipesRouter);

export { recipeRouter };
