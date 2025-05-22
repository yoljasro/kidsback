import express from 'express';
import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame
} from '../controllers/gameTypeConroller.mjs';

const router = express.Router();

// GET all games
router.get('/', getAllGames);

// GET a specific game by ID
router.get('/:id', getGameById);

// POST a new game
router.post('/', createGame);

// PUT update a game
router.put('/:id', updateGame);

// DELETE a game
router.delete('/:id', deleteGame);

export default router;
