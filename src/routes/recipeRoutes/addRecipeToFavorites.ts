import { Router } from "express";
import { addRecipeToFavorites } from "../../controllers/recipeControllers";
import { validateRequest } from "../../middlewares/validate-request";
import { addRecipeToFavoritesValidators } from "../../services/recipeValidators/addRecipeToFavoritesValidators";

const router = Router();
router.post(
  "/favorites/:id",
  addRecipeToFavoritesValidators,
  validateRequest,
  addRecipeToFavorites
);

export { router as addRecipeToFavoritesRouter };
