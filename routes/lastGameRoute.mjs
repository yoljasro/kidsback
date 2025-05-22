// 📦 dialogRoutes.mjs
import express from 'express';
import { getAllDialogs, createDialog } from '../controllers/lastgameController.mjs';

const router = express.Router();

// Routes
router.get('/lastgame', getAllDialogs);
router.post('/lastgame', createDialog);

export default router;


