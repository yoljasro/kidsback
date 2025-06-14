import mongoose from "mongoose";

const ChestWordSchema = new mongoose.Schema(
  {
    word: { type: String, required: true },
    image: { type: String, required: false },
    order: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("ChestWord", ChestWordSchema);
