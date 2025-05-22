import GreetingGame from '../models/greetingmodels.mjs';
import path from 'path';

// 📌 1. Barcha savollarni olish
export const getAllGreetings = async (req, res) => {
  try {
    const greetings = await GreetingGame.find().sort({ order: 1 });
    res.json(greetings);
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi', error });
  }
};

// 📌 2. Yangi o'yin qo'shish
export const createGreeting = async (req, res) => {
  try {
    const { question, word, order } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const newGreeting = new GreetingGame({ question, word, order, image });
    await newGreeting.save();

    res.status(201).json(newGreeting);
  } catch (error) {
    res.status(500).json({ message: 'Yaratishda xatolik', error });
  }
};

// 📌 3. Natijani tekshirish
export const checkResult = async (req, res) => {
  try {
    const { word, userInput } = req.body;
    const isCorrect = word.trim().toLowerCase() === userInput.trim().toLowerCase();

    res.json({ isCorrect });
  } catch (error) {
    res.status(500).json({ message: 'Natijani tekshirishda xatolik', error });
  }
};

