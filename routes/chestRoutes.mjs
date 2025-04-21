import express from 'express';
import {
  createChestWord,
  getAllChestWords,
  getRandomChestWord
} from '../controllers/chestController.mjs';

const router = express.Router();

router.post('/', createChestWord);         // Admin uchun: yangi so‘z qo‘shish
router.get('/', getAllChestWords);         // Barcha so‘zlar
router.get('/random', getRandomChestWord); // O‘yinda random so‘z olish

export default router;
