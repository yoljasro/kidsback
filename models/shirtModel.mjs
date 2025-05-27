import mongoose from "mongoose";

const shirtGameSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  question: { type: String, required: true },
  correctAnswers: [{ type: String, required: true }] // masalan: ["жёлтый", "зелёный"]
});

const ShirtGame = mongoose.model("ShirtGame", shirtGameSchema);
export default ShirtGame;
