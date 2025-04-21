import express from 'express';
import {
  createWheelPhrase,
  getAllWheelPhrases,
  getRandomWheelPhrase,
} from '../controllers/wheelPhraseController.mjs';

const router = express.Router();

// POST - Add new phrase
router.post('/', createWheelPhrase);

// GET - All phrases
router.get('/', getAllWheelPhrases);

// GET - Random phrase (for wheel spin)
router.get('/random', getRandomWheelPhrase);

export default router;
