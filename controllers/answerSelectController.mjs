import AnswerSelection from '../models/answerSelectModel.mjs';

// ✅ Barcha o'yinlarni olish
export const getAllAnswerSelections = async (req, res) => {
  try {
    const games = await AnswerSelection.find().sort({ order: 1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik", error });
  }
};

// ✅ Tasodifiy o'yin olish
export const getRandomAnswerSelection = async (req, res) => {
  try {
    const randomGame = await AnswerSelection.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomGame[0]);
  } catch (error) {
    res.status(500).json({ message: "Tasodifiy o'yin olishda xatolik", error });
  }
};

// ✅ Yangi o'yin qo'shish
export const createAnswerSelection = async (req, res) => {
  try {
    const { question, options, correctIndex, imageUrl, order, hint } = req.body;

    const newGame = new AnswerSelection({
      question,
      options,
      correctIndex,
      imageUrl,
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
export const checkAnswerSelection = async (req, res) => {
  try {
    const { gameId, userAnswer } = req.body;
    const game = await AnswerSelection.findById(gameId);

    if (!game) {
      return res.status(404).json({ message: "O'yin topilmadi" });
    }

    const correctOption = game.options[game.correctIndex].text;
    const isCorrect = correctOption.trim().toLowerCase() === userAnswer.trim().toLowerCase();

    res.json({ isCorrect, correctAnswer: correctOption });
  } catch (error) {
    res.status(500).json({ message: "Javobni tekshirishda xatolik", error });
  }
};
