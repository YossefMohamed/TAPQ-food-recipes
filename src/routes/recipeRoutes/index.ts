import { Router } from "express";
import { createRecipeRouter } from "./createRecipe";
import { getRecipeRouter } from "./getRecipe";
import { getRecipesRouter } from "./getRecipes";
import { getTagsRouter } from "./getTags";

const recipeRouter = Router();
recipeRouter.use(createRecipeRouter);
recipeRouter.use(getTagsRouter);
recipeRouter.use(getRecipeRouter);
recipeRouter.use(getRecipesRouter);

export { recipeRouter };
