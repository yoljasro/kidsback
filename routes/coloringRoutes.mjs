import express from "express";
import {
  getAllColoringTasks,
  createColoringTask,
  getColoringTaskById,
  checkAnswer
} from "../controllers/coloringGame.controller.mjs";
import upload from "../middleware/upload.mjs";  // Multer middleware

const router = express.Router();

router.get("/", getAllColoringTasks);  // Barcha topshiriqlar
// Fayllar va form ma'lumotlarini birga qabul qilish
router.post("/",
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'correctImage', maxCount: 1 }]),
  createColoringTask  // Yangi topshiriq qo‘shish
);
router.get("/:id", getColoringTaskById);  // Bitta topshiriq
router.post("/:id/check", checkAnswer);   // Javobni tekshirish

export default router;
