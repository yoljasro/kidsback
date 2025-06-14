import express from 'express';
import {
  createColorMatch,
  getAllColorMatches,
  getRandomColorMatch,
  checkAnswer
} from '../controllers/colorMatchController.mjs';

const router = express.Router();

router.post('/', createColorMatch);                // Yangi o‘yin topshirig‘ini qo‘shish
router.get('/', getAllColorMatches);               // Barcha topshiriqlar
router.get('/random', getRandomColorMatch);        // Tasodifiy topshiriq
router.post('/check', checkAnswer);                // Javobni tekshirish

export default router;
