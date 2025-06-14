import mongoose from 'mongoose';

const contourDrawingSchema = new mongoose.Schema({
  phrase: { type: String, required: true }, // 🆕 task matni
  imageUrl: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const ContourDrawing = mongoose.model('ContourDrawing', contourDrawingSchema);
export default ContourDrawing;
