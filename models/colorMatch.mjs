//3.0
import mongoose from 'mongoose';

const ColorMatchSchema = new mongoose.Schema({
  items: [
    {
      imageUrl: String,         // masalan: 'tree.png'
      correctColor: String      // masalan: 'Зелёный'
    }
  ],
  options: [String],            // ['Зелёный', 'Розовый', 'Оранжевый']
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ColorMatch = mongoose.model('ColorMatch', ColorMatchSchema);
export default ColorMatch;
