import { Router } from "express";
import { addRating } from "../../controllers/reviewsControllers";
import { validateRequest } from "../../middlewares/validate-request";
import { addReviewValidtors } from "../../services/reviewValidators/addReviewValidtors";

const router = Router();
router.post("/:id", addReviewValidtors, validateRequest, addRating);

export { router as addRatingRouter };
