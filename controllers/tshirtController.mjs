import Tshirt from "../models/tShirt.mjs";

// Barcha futbolkalarni olish
export const getAllTshirts = async (req, res) => {
  try {
    const tshirts = await Tshirt.find();
    res.json(tshirts);
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik" });
  }
};

// Yangi futbolka qo‘shish
export const createTshirt = async (req, res) => {
  const { bodyColor, sleeveColor, imageUrl } = req.body;
  try {
    const newTshirt = new Tshirt({ bodyColor, sleeveColor, imageUrl });
    await newTshirt.save();
    res.status(201).json(newTshirt);
  } catch (error) {
    res.status(400).json({ error: "Yaratishda xatolik" });
  }
};

// Tasodifiy savol: «Какие цвета у этой футболки?»
export const getRandomTshirtQuestion = async (req, res) => {
  try {
    const tshirts = await Tshirt.aggregate([{ $sample: { size: 1 } }]);
    if (tshirts.length === 0) {
      return res.status(404).json({ error: "Hech narsa topilmadi" });
    }

    const tshirt = tshirts[0];
    const question = "Какие цвета у этой футболки?";

    res.json({
      question,
      correctAnswers: [tshirt.bodyColor, tshirt.sleeveColor],
      tshirt
    });
  } catch (error) {
    res.status(500).json({ error: "Server xatosi" });
  }
};
