import ColoringGame from "../models/coloringModel.mjs";

// 📌 Barcha topshiriqlarni olish
export const getAllColoringTasks = async (req, res) => {
  try {
    const tasks = await ColoringGame.find().sort({ order: 1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};

// 📌 Yangi topshiriq qo‘shish
export const createColoringTask = async (req, res) => {
  try {
    const newTask = new ColoringGame(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Yaratishda xatolik", error });
  }
};

// 📌 ID orqali task olish
export const getColoringTaskById = async (req, res) => {
  try {
    const task = await ColoringGame.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Topshiriq topilmadi" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};

// 📌 Javobni tekshirish (tanlangan rang asosida)
export const checkAnswer = async (req, res) => {
  try {
    const task = await ColoringGame.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Topshiriq topilmadi" });

    const { answerColor } = req.body;

    const isCorrect = task.correctColor.toLowerCase() === answerColor.toLowerCase();

    res.json({
      correct: isCorrect,
      correctColor: task.correctColor,
      message: isCorrect ? "✅ To‘g‘ri!" : `❌ Noto‘g‘ri. To‘g‘ri javob: ${task.correctColor}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error });
  }
};
