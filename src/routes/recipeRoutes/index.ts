import { Router } from "express";
import { protect } from "../../middlewares/auth";
import { createRecipeRouter } from "./createRecipe";

const recipeRouter = Router();
recipeRouter.use(createRecipeRouter);

export { recipeRouter };
