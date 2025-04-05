import express from "express";
import { getAllGreetings, createGreeting } from "../controllers/greetingGame.controller.mjs";

const router = express.Router();

router.get("/", getAllGreetings);          // 📥 Barcha so‘zlar
router.post("/", createGreeting);          // ➕ Yangi so‘z qo‘shish (faqat admin)

export default router;
