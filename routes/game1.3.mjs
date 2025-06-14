import express from 'express';
import { getAll, creating, getByOrder } from '../controllers/game1_3.controller.mjs';

const router = express.Router();


// GET - Barcha savollarni olish
router.get("/", getAll);

// GET - order bo'yicha bitta savolni qaytarish
router.get("/next/:order", getByOrder);

// POST - Yangi o'yin qo'shish
router.post("/", creating);


export default router;
