import CharacterDialogGame from "../models/dialogWithCharactersModel.mjs";

// Barcha o‘yinlar
export const getAllCharacterGames = async (req, res) => {
  try {
    const games = await CharacterDialogGame.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

// Bitta o‘yinni olish
export const getCharacterGameById = async (req, res) => {
  try {
    const game = await CharacterDialogGame.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Topilmadi" });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err.message });
  }
};

// O‘yin yaratish
export const createCharacterGame = async (req, res) => {
  try {
    const { cards, backgroundImage } = req.body;
    const game = new CharacterDialogGame({ cards, backgroundImage });
    await game.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: "Yaratishda xatolik", error: err.message });
  }
};

// O‘chirish
export const deleteCharacterGame = async (req, res) => {
  try {
    await CharacterDialogGame.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "O‘yin o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};
