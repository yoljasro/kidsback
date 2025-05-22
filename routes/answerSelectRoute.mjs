import express from 'express';
import {
  getAllAnswerSelections,
  getRandomAnswerSelection,
  createAnswerSelection,
  checkAnswerSelection
} from '../controllers/answerSelectController.mjs';

const router = express.Router();

// ✅ Barcha o'yinlarni olish
router.get('/', getAllAnswerSelections);

// ✅ Tasodifiy o'yin olish
router.get('/random', getRandomAnswerSelection);

// ✅ Yangi o'yin qo'shish (admin uchun)
router.post('/', createAnswerSelection);

// ✅ Javobni tekshirish
router.post('/check', checkAnswerSelection);

export default router;
