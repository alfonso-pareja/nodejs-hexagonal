import { body } from "express-validator";

export const loginValidator = [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 4 }).withMessage("Password must be at least 4 characters long"),
];
