import { Router } from "express";
import {body} from "express-validator"
import { registerUser, loginUser } from "../controllers/user.controller.js";
const router = Router();

router.post("/register", [
    body("email").isEmail(),
    body("password").isLength({min: 5}).withMessage("Password must be at least 5 characters long"),
    body("fullName.firstName").isLength({min: 2}).withMessage("First name must be at least 2 characters long"),
    body("fullName.lastName").isLength({min: 2}).withMessage("Last name must be at least 2 characters long"),
], registerUser)

router.post("/login", [
    body("email").isEmail(),
    body("password").isLength({min: 5}).withMessage("Password must be at least 5 characters long"),
], loginUser)


export default router