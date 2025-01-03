import { Router } from "express";
import { registerUser } from "../controllers/user.controllers";
import { upload } from "../middlewares/multer.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Signup route
router.route("/register").post(upload.single("profilePicture"), asyncHandler(registerUser));

export default router;
