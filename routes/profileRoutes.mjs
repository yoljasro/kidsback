import express from "express";
import { getProfile, updateProfile, updateSettings } from "../controllers/profileController.mjs";

const router = express.Router();

router.get("/:userId", getProfile); // Profilni olish
router.post("/:userId", updateProfile); // Yaratish yoki yangilash
router.post("/:userId/settings", updateSettings); // Sozlamalarni yangilash

export default router;
