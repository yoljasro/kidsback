import WheelPhrase from '../models/WheelPhrase.mjs';

// Create a new phrase
export const createWheelPhrase = async (req, res) => {
  try {
    const { russian, uzbek, module, lesson } = req.body;

    const newPhrase = new WheelPhrase({ russian, uzbek, module, lesson });
    await newPhrase.save();

    res.status(201).json(newPhrase);
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error });
  }
};

// Get all phrases
export const getAllWheelPhrases = async (req, res) => {
  try {
    const phrases = await WheelPhrase.find();
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error });
  }
};

// Get one random phrase
export const getRandomWheelPhrase = async (req, res) => {
  try {
    const count = await WheelPhrase.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomPhrase = await WheelPhrase.findOne().skip(randomIndex);

    res.status(200).json(randomPhrase);
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error });
  }
};
