import { Router } from "express";
import { requireLogin } from "../../middlewares/protect-route";
import { addRatingRouter } from "./addRating";

const reviewRouter = Router();
reviewRouter.use(requireLogin);
reviewRouter.use(addRatingRouter);

export { reviewRouter };
