import Item from "../models/item.mjs";

// Barcha itemlarni olish
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Serverda xatolik" });
  }
};

// Yangi item qo‘shish
export const createItem = async (req, res) => {
  const { name, color, imageUrl } = req.body;
  try {
    const newItem = new Item({ name, color, imageUrl });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: "Maʼlumotni saqlashda xatolik" });
  }
};

// Tasodifiy savol
export const getRandomQuestion = async (req, res) => {
  try {
    const items = await Item.aggregate([{ $sample: { size: 1 } }]);
    if (items.length === 0) {
      return res.status(404).json({ error: "Hech narsa topilmadi" });
    }
    const question = `Какого цвета ${items[0].name}?`;
    res.json({
      question,
      correctAnswer: items[0].color,
      item: items[0]
    });
  } catch (error) {
    res.status(500).json({ error: "Server xatosi" });
  }
};
