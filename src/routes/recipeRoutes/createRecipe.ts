import { Router } from "express";
import { createRecipe } from "../../controllers/recipeControllers";
import { validateRequest } from "../../middlewares/validate-request";
import { createRecipeValidators } from "../../services/recipeValidators/createRecipeValidators";

const router = Router();
router.post("/", createRecipeValidators, validateRequest, createRecipe);

export { router as createRecipeRouter };
