import mongoose from "mongoose";

const coloringGameSchema = new mongoose.Schema({
  image: { type: String, required: true },        // Kontur rasm URL
  correctColor: { type: String, required: true }, // To'g'ri rang (masalan, "красный")
  word: { type: String, required: true },         // Masalan: "машину"
  phrase: { type: String, required: true },       // Masalan: "Раскрась машину в красный цвет"
  order: { type: Number },                        // O'yin ketma-ketligi
}, { timestamps: true });

const ColoringGame = mongoose.model("ColoringGame", coloringGameSchema);
export default ColoringGame;
