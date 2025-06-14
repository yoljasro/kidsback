//4.0
import mongoose from 'mongoose';

const gameType4Schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const GameType4 = mongoose.model('GameType4', gameType4Schema);

export default GameType4;