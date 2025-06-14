import Game1_3 from "../models/game1.3.mjs";

// Yangi ibora qo'shish
export const creating = async (req, res) => {
    try {
        const { answer,
            question, order, image } = req.body;

        const newPhrase = new Game1_3({
            answer,
            question, order,
            image
        });
        await newPhrase.save();

        res.status(201).json(newPhrase);
    } catch (error) {
        res.status(500).json({ message: "Xatolik yuz berdi", error });
    }
};

// Barcha iboralarni olish
export const getAll = async (req, res) => {
    try {
        const phrases = await Game1_3.find().sort({ order: 1 });
        res.status(200).json(phrases);
    } catch (error) {
        res.status(500).json({ message: "Xatolik yuz berdi", error });
    }
};


// Order bo'yicha iborani olish
export const getByOrder = async (req, res) => {
    try {
        const { order } = req.params;
        const phrase = await Game1_3.findOne({ order: order });

        if (!phrase) {
            return res.status(404).json(false);
        }

        res.status(200).json(phrase);
    } catch (error) {
        res.status(500).json({ message: "Xatolik yuz berdi", error });
    }
};
