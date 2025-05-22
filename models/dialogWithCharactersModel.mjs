//3.2
import mongoose from "mongoose";

const dialogCardSchema = new mongoose.Schema({
  text: { type: String, required: true },
  order: { type: Number, required: true },  // To‘g‘ri tartib
  character: { type: String, enum: ["boy", "girl"], required: true }, // Belgilovchi
  audioUrl: { type: String }, // Ixtiyoriy audio fayl URL
});

const characterDialogGameSchema = new mongoose.Schema({
  title: { type: String, default: "Dialog o‘yini - belgilangan qahramonlar bilan" },
  backgroundImage: { type: String }, // Ixtiyoriy rasm (fon)
  cards: [dialogCardSchema],
});

const CharacterDialogGame = mongoose.model("CharacterDialogGame", characterDialogGameSchema);
export default CharacterDialogGame;
