import mongoose from "mongoose";

const tshirtSchema = new mongoose.Schema({
  bodyColor: { type: String, required: true },     // Masalan: "жёлтый"
  sleeveColor: { type: String, required: true },   // Masalan: "оранжевый"
  imageUrl: { type: String }                       // Opsional: futbolka rasmi
});

const Tshirt = mongoose.model("Tshirt", tshirtSchema);
export default Tshirt;
