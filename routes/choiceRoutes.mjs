import express from 'express';
import {
  getAllImageChoices,
  createImageChoice,
  updateImageChoice,
  deleteImageChoice
} from '../controllers/choiceController.mjs';

const router = express.Router();

router.get('/image-choices', getAllImageChoices);
router.post('/image-choices', createImageChoice);
router.put('/image-choices/:id', updateImageChoice);
router.delete('/image-choices/:id', deleteImageChoice);

export default router;
