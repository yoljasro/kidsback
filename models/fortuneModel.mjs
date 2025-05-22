//1.2
// models/gameContent.js
import mongoose from 'mongoose';

const gameContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true // misol: "instruction"
  },
  content: {
    type: String,
    required: true
  }
});

const GameContent = mongoose.model('GameContent', gameContentSchema);
export default GameContent;
