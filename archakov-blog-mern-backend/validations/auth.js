import { body } from "express-validator";

export const registerValidation = [
  body("email", "incorect email format").isEmail(),
  body("password", "pasword is too short").isLength({ min: 5 }),   
  body("fullName", "too short fullname").isLength({ min: 3 }),    
  body("avatarUrl", "incorect url format").optional().isURL(),
];
 