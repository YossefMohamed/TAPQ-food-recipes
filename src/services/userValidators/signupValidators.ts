import { body } from "express-validator";
import User from "../../models/userModel";

export const signupValidators = [
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const isDuplicated = (await User.find({ email: value })).length;
      if (isDuplicated) throw new Error(`${value} is duplicated!`);
      return true;
    }),
  body("name").not().isEmpty().withMessage("Cant be empty"),
  body("password")
    .isLength({ min: 3, max: 20 })
    .withMessage("Please Enter A Valid password")
    .bail()
    .exists()
    .withMessage("Cant be empty"),
  body("passwordConfirmation")
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;

      // If password and confirm password not same
      if (password !== confirmPassword) {
        throw new Error("Password and password confirmation are not the same");
      }
    })
    .bail()
    .exists()
    .withMessage("Cant be empty"),
];
