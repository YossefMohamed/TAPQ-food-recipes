import { Router } from "express";
import {
  editUser,
  getAllUsers,
  getCurrentUser,
  getUser,
  signin,
  signup,
} from "../controllers/userController";
import { protect } from "../middlewares/auth";
import { signupValidators } from "../services/userRoutesValidator";

const userRouter = Router();

/**
 * @openapi
 * '/api/users/signup':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      400:
 *        description: Bad request
 */

userRouter.post("/signup", signupValidators, signup);

/**
 * @openapi
 * '/api/users/signin':
 *  post:
 *     tags:
 *     - User
 *     summary: Signin  a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UserSignInInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      404:
 *        description: Invalid Email Or Password
 */

userRouter.post("/signin", signin);

// get All Users Only For Testing
userRouter.get("/all", getAllUsers);

userRouter.use(protect);

/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - User
 *     summary: Get Current User Data
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      404:
 *        description: User Have To Login
 */

userRouter.get("/", getCurrentUser);
userRouter.get("/:id", getUser);
userRouter.patch("/", editUser);

export { userRouter };
