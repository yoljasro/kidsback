import Word from '../models/word.mjs';

// Yangi so'z qo'shish
export const createWord = async (req, res) => {
  try {
    const word = new Word(req.body);
    await word.save();
    res.status(201).json(word);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Barcha so'zlarni olish
export const getAllWords = async (req, res) => {
  try {
    const words = await Word.find().sort({ createdAt: -1 });
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kategoriya bo'yicha filter
export const getWordsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const words = await Word.find({ category });
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modul yoki dars bo'yicha filter
export const filterWords = async (req, res) => {
  try {
    const { module, lesson } = req.query;
    const filter = {};
    if (module) filter.module = module;
    if (lesson) filter.lesson = lesson;

    const words = await Word.find(filter);
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// So'zni yangilash
export const updateWord = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Word.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// So'zni o'chirish
export const deleteWord = async (req, res) => {
  try {
    const { id } = req.params;
    await Word.findByIdAndDelete(id);
    res.json({ message: 'O‘chirildi' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
