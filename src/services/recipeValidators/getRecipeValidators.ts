import { param } from "express-validator";

export const getRecipeValidators = [
  param("id").not().isMongoId().withMessage("Recipe not found"),
];
