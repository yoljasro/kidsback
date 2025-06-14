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
    const { correctColor, word, phrase, options, order } = req.body;
 
    // `image` va `correctImage` fayllarini olish
    const image = req.files.image ? `/uploads/${req.files.image[0].filename}` : ''; // Image fayl
    const correctImage = req.files.correctImage ? `/uploads/${req.files.correctImage[0].filename}` : ''; // CorrectImage fayl

    // CorrectColorni optionsda mavjudligini tekshirish
    if (!options?.includes(correctColor)) {
      return res.status(400).json({ message: "Correct color options ichida bo'lishi kerak" });
    }

    // Yangi topshiriqni yaratish
    const newTask = new ColoringGame({
      image,
      correctColor,
      word,
      phrase,
      options,
      order,
      correctImage,
    });

    // Topshiriqni saqlash
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
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

// 📌 Javobni tekshirish
export const checkAnswer = async (req, res) => {
  try {
    const task = await ColoringGame.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Topshiriq topilmadi" });

    const { answerColor } = req.body;

    if (!task.options.includes(answerColor)) {
      return res.status(400).json({ message: "Kiritilgan rang variantlar ichida emas" });
    }

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
