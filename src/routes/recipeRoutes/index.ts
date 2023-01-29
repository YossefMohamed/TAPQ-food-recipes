import { Router } from "express";
import { requireLogin } from "../../middlewares/protect-route";
import { addRecipeToFavoritesRouter } from "./addRecipeToFavorites";
import { createRecipeRouter } from "./createRecipe";
import { getMetaDataRouter } from "./getMetaData";
import { getMyFavoritesRouter } from "./getMyFavorites";
import { getRecipeRouter } from "./getRecipe";
import { getRecipesRouter } from "./getRecipes";
import { getTagsRouter } from "./getTags";
import { uploadImageRouter } from "./uploadRecipeImage";

const recipeRouter = Router();
recipeRouter.use(createRecipeRouter);
recipeRouter.use(getMetaDataRouter);
recipeRouter.use(getTagsRouter);
recipeRouter.use(getRecipeRouter);
recipeRouter.use(getRecipesRouter);
recipeRouter.use(uploadImageRouter);

recipeRouter.use(requireLogin);
recipeRouter.use(getMyFavoritesRouter);
recipeRouter.use(addRecipeToFavoritesRouter);

export { recipeRouter };
