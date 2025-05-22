import express from 'express';
import multer from 'multer';
import { getAllGreetings, createGreeting, checkResult } from '../controllers/greetingGame.controller.mjs';

const router = express.Router();

// Multer sozlamalari
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// GET - Barcha savollarni olish
router.get('/', getAllGreetings);

// POST - Yangi o'yin qo'shish (faqat rasm yuklash)
router.post('/', upload.single('image'), createGreeting);

// POST - O'yin natijasini tekshirish
router.post('/check', checkResult);

export default router;
