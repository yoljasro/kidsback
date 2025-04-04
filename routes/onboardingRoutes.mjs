import express from "express";
import { getOnboarding, updateOnboarding, completeOnboarding } from "../controllers/onboardingController.mjs";

const router = express.Router();

router.get("/:userId", getOnboarding); // 📌 Foydalanuvchi onboarding holatini olish
router.post("/:userId", updateOnboarding); // 📌 Onboardingni yangilash yoki yaratish
router.post("/:userId/complete", completeOnboarding); // 📌 Onboarding tugatish

export default router;
