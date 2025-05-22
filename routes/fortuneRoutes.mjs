// routes/gameContentRoutes.js
import express from 'express';
import { getInstruction } from '../controllers/fortuneController.mjs';

const router = express.Router();

router.get('/instruction', getInstruction);

export default router;
