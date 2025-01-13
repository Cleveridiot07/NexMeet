import { Router } from "express";
import { generateMeetingId,generateMeetingToken } from "../controllers/meeting.conrollers";
import { asyncHandler } from "../utils/asyncHandler";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/meetingid",
  asyncHandler(authMiddleware),
  asyncHandler(generateMeetingId)
);

router.post(
  "/meetingtoken",
  asyncHandler(authMiddleware),
  asyncHandler(generateMeetingToken)
);

export default router;
