import express from 'express';
import {
  getAllSilhouettes,
  getRandomSilhouette,
  createSilhouette,
  checkSilhouetteAnswer
} from '../controllers/silhouetteController.mjs';

const router = express.Router();

// ✅ Barcha o'yinlarni olish
router.get('/', getAllSilhouettes);

// ✅ Tasodifiy o'yin olish
router.get('/random', getRandomSilhouette);

// ✅ Yangi o'yin qo'shish (admin uchun)
router.post('/', createSilhouette);

// ✅ Javobni tekshirish
router.post('/check', checkSilhouetteAnswer);

export default router;
