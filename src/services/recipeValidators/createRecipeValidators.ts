import { body } from "express-validator";

export const createRecipeValidators = [
  body("title")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Cant be empty")
    .bail()
    .isLength({
      min: 5,
    })
    .withMessage("Title must be more than 4 letters"),
  body("description")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Cant be empty")
    .bail()
    .isLength({
      min: 100,
    })
    .withMessage("Title must be more than 100 letters"),
  body("ingredients")
    .isArray({
      min: 3,
    })
    .withMessage("Must be more than 3 ingrediantes")
    .bail()
    .not()
    .isEmpty()
    .withMessage("Cant be empty"),
  body("steps")
    .isArray({
      min: 3,
    })
    .withMessage("Must be more than 3 steps")
    .bail()
    .not()
    .isEmpty()
    .withMessage("Cant be empty"),
  body("tags")
    .isArray({
      min: 1,
      max: 4,
    })
    .withMessage("Must be at least 1 tag and at most 4 tags")
    .bail()
    .not()
    .isEmpty()
    .withMessage("Cant be empty"),
  body("time").not().isEmpty().withMessage("Cant be empty"),
];
