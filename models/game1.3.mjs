// 1.3
import mongoose from "mongoose";

const Game1_3 = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
        unique: true,
    },
});

const WheelPhrase = mongoose.model("Game1.3", Game1_3);

export default WheelPhrase;
