import ShirtGame from "../models/shirtModel.mjs";

// Barcha savollarni olish
export const getAllShirtGames = async (req, res) => {
  try {
    const games = await ShirtGame.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik" });
  }
};

// Yangi savol qo‘shish
export const createShirtGame = async (req, res) => {
  const { imageUrl, question, correctAnswers } = req.body;
  try {
    const newGame = new ShirtGame({ imageUrl, question, correctAnswers });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: "Yaratishda xatolik", message: error.message });
  }
};

// Tasodifiy savol olish
export const getRandomShirtGame = async (req, res) => {
  try {
    const games = await ShirtGame.aggregate([{ $sample: { size: 1 } }]);
    if (games.length === 0) {
      return res.status(404).json({ error: "Savollar topilmadi" });
    }
    res.json(games[0]);
  } catch (error) {
    res.status(500).json({ error: "Tasodifiy savol olishda xatolik" });
  }
};
