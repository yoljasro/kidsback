import mongoose from 'mongoose';

const greetingGameSchema = new mongoose.Schema({
  question: { type: String, required: true },
  word: { type: String, required: true },
  image: { type: String },                // Rasm manzili (URL yoki local path)
  order: { type: Number },                // Tartib raqami
}, { timestamps: true });

const GreetingGame = mongoose.model("GreetingGame", greetingGameSchema);
export default GreetingGame;
