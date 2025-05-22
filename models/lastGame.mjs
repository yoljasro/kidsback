import mongoose from 'mongoose';

const dialogSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{
    text: { type: String, required: true },
    isCorrect: { type: Boolean, default: false }
  }],
  imageUrl: { type: String, required: true }
}, { timestamps: true });

const Dialog = mongoose.model('Dialog', dialogSchema);
export default Dialog;