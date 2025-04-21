import express from 'express';
import {
  createWord,
  getAllWords,
  getWordsByCategory,
  filterWords,
  updateWord,
  deleteWord
} from '../controllers/wordController.mjs';

const router = express.Router();

router.post('/', createWord);
router.get('/', getAllWords);
router.get('/category/:category', getWordsByCategory);
router.get('/filter', filterWords);
router.put('/:id', updateWord);
router.delete('/:id', deleteWord);

export default router;
