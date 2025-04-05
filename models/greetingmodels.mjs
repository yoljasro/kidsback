import mongoose from "mongoose";

const greetingGameSchema = new mongoose.Schema({
  word: { type: String, required: true }, // Masalan: "Здравствуйте"
  image: { type: String },                // Rasm manzili (URL yoki local path)
  audio: { type: String },                // Audio fayl manzili
  description: { type: String },          // Ixtiyoriy: tushuntirish
  order: { type: Number },                // Tartib raqami
}, { timestamps: true });

const GreetingGame = mongoose.model("GreetingGame", greetingGameSchema);
export default GreetingGame;
