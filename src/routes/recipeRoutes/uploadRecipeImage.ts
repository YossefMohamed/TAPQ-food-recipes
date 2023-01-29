import { Router } from "express";
import { uploadRecipeImage } from "../../controllers/recipeControllers";
import { upload } from "../../middlewares/upload";

const router = Router();

router.post("/upload/:id", upload.single("image"), uploadRecipeImage);

export { router as uploadImageRouter };
