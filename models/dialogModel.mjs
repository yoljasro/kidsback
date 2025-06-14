import mongoose from "mongoose";

const dialogCardSchema = new mongoose.Schema({
  text: { type: String, required: true },
  order: { type: Number, required: true }, // To'g'ri tartibdagi o'rni
});

const dialogGameSchema = new mongoose.Schema({
  title: { type: String, default: "Dialog o‘yini" },
  cards: [dialogCardSchema],
});

const DialogGame = mongoose.model("DialogGame", dialogGameSchema);
export default DialogGame;
