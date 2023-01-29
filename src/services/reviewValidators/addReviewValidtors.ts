import { body, param } from "express-validator";
import mongoose from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";

export const addReviewValidtors = [
  param("id").custom(async (value, { req }) => {
    if (!mongoose.isValidObjectId(value)) throw new NotFoundError();
    return true;
  }),
  body("rating").isNumeric().withMessage("Add a valid rating").bail(),
  body("content")
    .isString()
    .withMessage("Add a valid content")
    .bail()
    .isLength({
      min: 3,
    })
    .withMessage("Add a valid content"),
];
