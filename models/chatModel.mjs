//1.5
import mongoose from 'mongoose';

const gameType1_5Schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false }
    }
  ],
  audio: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const GameType1_5 = mongoose.model('GameType1_5', gameType1_5Schema);

export default GameType1_5;
