import { Router } from "express";
import { createRecipe } from "../../controllers/recipeControllers";
import { requireLogin } from "../../middlewares/protect-route";
import { validateRequest } from "../../middlewares/validate-request";
import { createRecipeValidators } from "../../services/recipeValidators/createRecipeValidators";

const router = Router();
router.post(
  "/",
  requireLogin,
  createRecipeValidators,
  validateRequest,
  createRecipe
);

export { router as createRecipeRouter };
