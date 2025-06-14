import express from 'express';
import { getAllGreetings, createGreeting, checkResult, getGreetingByOrder } from '../controllers/greetingGame.controller.mjs';

const router = express.Router();


// GET - Barcha savollarni olish
router.get("/", getAllGreetings);

// GET - order bo'yicha bitta savolni qaytarish
router.get("/next/:order", getGreetingByOrder);

// POST - Yangi o'yin qo'shish
router.post("/", createGreeting);

// POST - O'yin natijasini tekshirish
router.post("/check", checkResult);


export default router;
