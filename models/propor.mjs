import mongoose from 'mongoose';

const gameType5Schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  pairs: [
    {
      left: { type: String, required: true },
      right: { type: String, required: true }
    }
  ],
  options: {
    leftColumn: [{ type: String, required: true }],
    rightColumn: [{ type: String, required: true }]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const GameType5 = mongoose.model('GameType5', gameType5Schema);

export default GameType5;
