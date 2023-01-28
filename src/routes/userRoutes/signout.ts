import { Router } from "express";
import { signout } from "../../controllers/userControllers";

const router = Router();

router.post("/signout", signout);

export { router as signoutRouter };
