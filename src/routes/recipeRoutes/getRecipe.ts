import { Router } from "express";
import { getRecipe } from "../../controllers/recipeControllers";
import { validateRequest } from "../../middlewares/validate-request";
import { getRecipeValidators } from "../../services/recipeValidators/getRecipeValidators";

const router = Router();
router.get("/", getRecipeValidators, validateRequest, getRecipe);

export { router as getRecipeRouter };
