import { Router } from "express";
import { getRecipes } from "../../controllers/recipeControllers";
import { validateRequest } from "../../middlewares/validate-request";
import { getRecipeValidators } from "../../services/recipeValidators/getRecipeValidators";

const router = Router();
router.get("/", getRecipes);

export { router as getRecipesRouter };
