import Silhouette from '../models/silhouetteModel.mjs';

// ✅ Barcha o'yinlarni olish
export const getAllSilhouettes = async (req, res) => {
  try {
    const games = await Silhouette.find().sort({ order: 1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik", error });
  }
};

// ✅ Tasodifiy o'yin olish
export const getRandomSilhouette = async (req, res) => {
  try {
    const randomGame = await Silhouette.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomGame[0]);
  } catch (error) {
    res.status(500).json({ message: "Tasodifiy o'yin olishda xatolik", error });
  }
};

// ✅ Yangi o'yin qo'shish
export const createSilhouette = async (req, res) => {
  try {
    const { question, options, correctIndex, imageUrl, answerImageUrl, order, hint } = req.body;

    const newGame = new Silhouette({
      question,
      options,
      correctIndex,
      imageUrl,
      answerImageUrl,
      order,
      hint
    });

    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: "O'yin yaratishda xatolik", error });
  }
};

// ✅ Foydalanuvchi javobini tekshirish
export const checkSilhouetteAnswer = async (req, res) => {
  try {
    const { gameId, userAnswer } = req.body;
    const game = await Silhouette.findById(gameId);

    if (!game) {
      return res.status(404).json({ message: "O'yin topilmadi" });
    }

    const correctOption = game.options[game.correctIndex].text;
    const isCorrect = correctOption.trim().toLowerCase() === userAnswer.trim().toLowerCase();

    res.json({ 
      isCorrect, 
      correctAnswer: correctOption, 
      answerImageUrl: game.answerImageUrl 
    });
  } catch (error) {
    res.status(500).json({ message: "Javobni tekshirishda xatolik", error });
  }
};
