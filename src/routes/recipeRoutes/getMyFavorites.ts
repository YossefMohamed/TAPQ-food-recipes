import { Router } from "express";
import { getMyFavorites } from "../../controllers/recipeControllers";

const router = Router();
router.get("/favorites/me", getMyFavorites);

export { router as getMyFavoritesRouter };
