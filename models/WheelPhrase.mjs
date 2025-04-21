import mongoose from 'mongoose';

const wheelPhraseSchema = new mongoose.Schema({
  russian: {
    type: String,
    required: true,
  },
  uzbek: {
    type: String,
    required: true,
  },
  module: {
    type: String,
    required: true,
  },
  lesson: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const WheelPhrase = mongoose.model('WheelPhrase', wheelPhraseSchema);
export default WheelPhrase;
