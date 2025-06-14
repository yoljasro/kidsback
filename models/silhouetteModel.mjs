import mongoose from 'mongoose';

const silhouetteSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false }
    }
  ],
  correctIndex: { type: Number, required: true },
  imageUrl: { type: String, required: true },    // Siluet rasmi
  answerImageUrl: { type: String, required: true }, // To'g'ri javob rasmi
  order: { type: Number, required: true },
  hint: { type: String, default: "" }
}, { timestamps: true });

const Silhouette = mongoose.model('Silhouette', silhouetteSchema);
export default Silhouette;
