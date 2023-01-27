import { param } from "express-validator";

export const getRecipeValidators = [
  param("id").isMongoId().withMessage("Recipe not found"),
];
