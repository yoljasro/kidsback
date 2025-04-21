import ChestWord from '../models/ChestWord.mjs';

// Yangi so‘z qo‘shish
export const createChestWord = async (req, res) => {
  try {
    const word = new ChestWord(req.body);
    await word.save();
    res.status(201).json(word);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Barcha so‘zlarni olish
export const getAllChestWords = async (req, res) => {
  try {
    const words = await ChestWord.find().sort({ createdAt: -1 });
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tasodifiy bitta so‘z olish (o‘yin boshlanganda)
export const getRandomChestWord = async (req, res) => {
  try {
    const random = await ChestWord.aggregate([{ $sample: { size: 1 } }]);
    res.json(random[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
