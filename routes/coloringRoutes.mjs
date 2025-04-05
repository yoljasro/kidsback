import express from "express";
import {
  getAllColoringTasks,
  createColoringTask,
  getColoringTaskById,
  checkAnswer
} from "../controllers/coloringGame.controller.mjs";

const router = express.Router();

router.get("/", getAllColoringTasks);              // Barcha topshiriqlar
router.post("/", createColoringTask);              // Yangi topshiriq qo‘shish
router.get("/:id", getColoringTaskById);           // Bitta topshiriq
router.post("/:id/check", checkAnswer);            // Javobni tekshirish

export default router;
