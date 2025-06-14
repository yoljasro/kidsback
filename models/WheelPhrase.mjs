import mongoose from "mongoose";

const WheelPhraseSchema = new mongoose.Schema({
  words: {
    type: Array,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },
});

const WheelPhrase = mongoose.model("WheelPhrase", WheelPhraseSchema);

export default WheelPhrase;
