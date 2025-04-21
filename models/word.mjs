import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  russian: { type: String, required: true },
  uzbek: { type: String, required: true },
  module: { type: String },
  lesson: { type: String },
  category: { type: String, enum: ['rus', 'uzb', 'bilmayman', 'bilaman'] }
}, { timestamps: true });

export default mongoose.model('Word', wordSchema);
