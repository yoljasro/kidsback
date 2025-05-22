import DialogGame from "../models/dialogModel.mjs";

// Barcha o‘yinlarni olish
export const getAllGames = async (req, res) => {
  try {
    const games = await DialogGame.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

// Bitta o‘yinni olish
export const getGameById = async (req, res) => {
  try {
    const game = await DialogGame.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "O‘yin topilmadi" });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err.message });
  }
};

// Yangi o‘yin yaratish
export const createGame = async (req, res) => {
  try {
    const { cards } = req.body;
    const game = new DialogGame({ cards });
    await game.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: "Ma’lumot xato", error: err.message });
  }
};

// O‘yinni o‘chirish
export const deleteGame = async (req, res) => {
  try {
    await DialogGame.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "O‘yin o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err.message });
  }
};
