import GreetingGame from "../models/greetingmodels.mjs";

// 📌 1. Barcha salomlashuvlarni olish
export const getAllGreetings = async (req, res) => {
  try {
    const greetings = await GreetingGame.find().sort({ order: 1 });
    res.json(greetings);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};

// 📌 2. Yangi salomlashuv qo‘shish (admin yoki dastlabki init uchun)
export const createGreeting = async (req, res) => {
  try {
    const newGreeting = new GreetingGame(req.body);
    await newGreeting.save();
    res.status(201).json(newGreeting);
  } catch (error) {
    res.status(500).json({ message: "Yaratishda xatolik", error });
  }
};
