import WheelPhrase from "../models/WheelPhrase.mjs";

// Yangi ibora qo'shish
export const createWheelPhrase = async (req, res) => {
  try {
    const { words, module, lesson, order } = req.body;

    const newPhrase = new WheelPhrase({ words, module, lesson, order });
    await newPhrase.save();

    res.status(201).json(newPhrase);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error });
  }
};

// Barcha iboralarni olish
export const getAllWheelPhrases = async (req, res) => {
  try {
    const phrases = await WheelPhrase.find().sort({ order: 1 });
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error });
  }
};

// Tasodifiy iborani olish
export const getRandomWheelPhrase = async (req, res) => {
  try {
    const count = await WheelPhrase.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomPhrase = await WheelPhrase.findOne().skip(randomIndex);

    res.status(200).json(randomPhrase);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error });
  }
};

// Order bo'yicha iborani olish
export const getPhraseByOrder = async (req, res) => {
  try {
    const { order } = req.params;
    const phrase = await WheelPhrase.findOne({ order: order });

    if (!phrase) {
      return res.status(404).json({ message: "Iborani topib bo'lmadi" });
    }

    res.status(200).json(phrase);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error });
  }
};
