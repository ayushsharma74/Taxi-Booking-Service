import { Router } from "express";
import { getProfile, loginDriver, logoutDriver, registerDriver } from "../controllers/driver.controller.js";
import { driverAuthMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerDriver)
router.post("/login", loginDriver)
router.post("/logout", logoutDriver)
router.get("/profile", driverAuthMiddleware, getProfile)

export default router