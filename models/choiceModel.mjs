//2.3
import mongoose from 'mongoose';

const imageChoiceSchema = new mongoose.Schema({
  phrase: { type: String, required: true }, // Masalan: "Выберите картинку 'Добрый вечер'"
  options: [
    {
      imageUrl: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const ImageChoice = mongoose.model('ImageChoice', imageChoiceSchema);
export default ImageChoice;
