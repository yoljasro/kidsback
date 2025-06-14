//2.0
import mongoose from 'mongoose';

const answerSelectionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false }
    }
  ],
  correctIndex: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  order: { type: Number, required: true },
  hint: { type: String, default: "" }
}, { timestamps: true });

const AnswerSelection = mongoose.model('AnswerSelection', answerSelectionSchema);
export default AnswerSelection;
