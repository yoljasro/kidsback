import mongoose from 'mongoose';

const chestWordSchema = new mongoose.Schema({
  russian: { type: String, required: true },     // Masalan: "Привет"
  uzbek: { type: String, required: true },       // Masalan: "Salom"
  imageUrl: { type: String, required: true },    // Masalan: "https://domain/image.jpg"
  module: { type: String },                      // Masalan: "1-modul"
  lesson: { type: String },                      // Masalan: "2-dars"
}, { timestamps: true });

export default mongoose.model('ChestWord', chestWordSchema);
