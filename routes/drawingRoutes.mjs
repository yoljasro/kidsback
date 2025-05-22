import express from 'express';
import { getAllDrawings, createDrawing, updateDrawing, deleteDrawing } from '../controllers/drawingController.mjs';

const router = express.Router();

router.get('/drawings', getAllDrawings);
router.post('/drawings', createDrawing);
router.put('/drawings/:id', updateDrawing);  
router.delete('/drawings/:id', deleteDrawing);

export default router;