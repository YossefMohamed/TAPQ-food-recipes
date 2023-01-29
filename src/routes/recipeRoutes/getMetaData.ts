import { Router } from "express";
import { getMetaData } from "../../controllers/recipeControllers";

const router = Router();
router.get("/home", getMetaData);

export { router as getMetaDataRouter };
