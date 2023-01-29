import { param } from "express-validator";

export const addRecipeToFavoritesValidators = [
  param("id").isMongoId().withMessage("Recipe not found"),
];
