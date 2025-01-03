import { Router } from "express";
import {
  registerUser,
  loginUser,
  editUser,
} from "../controllers/user.controllers";
import { upload } from "../middlewares/multer.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

// Signup route
router
  .route("/register")
  .post(upload.single("profilePicture"), asyncHandler(registerUser));

router.post("/login", asyncHandler(loginUser));

router.put(
  "/edit",
  asyncHandler(authMiddleware),
  upload.single("profilePicture"),
  asyncHandler(editUser)
);

export default router;
