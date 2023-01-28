import { Router } from "express";
import { getTags } from "../../controllers/recipeControllers";

const router = Router();
router.get("/tags", getTags);

export { router as getTagsRouter };
