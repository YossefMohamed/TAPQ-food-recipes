import { body } from "express-validator";

export const editUserValidators = [
  body("name")
    .isString()
    .withMessage("Please Enter A Valid Name ")
    .bail()
    .not()
    .isEmpty()
    .withMessage(" Name Cant Be Empty")
    .bail()
    .isLength({ min: 3, max: 20 })
    .bail()
    .withMessage("Please Enter A Valid  Name"),
];
