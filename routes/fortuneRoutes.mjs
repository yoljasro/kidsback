import express from 'express';
import { getInstruction, createInstruction } from '../controllers/fortuneController.mjs';

const router = express.Router();

router.get('/instruction', getInstruction);
router.post('/instruction', createInstruction); // <-- ✅ SHU QATOR MUHIM

export default router;
