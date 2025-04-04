import mongoose from "mongoose";

const onboardingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  step: { type: Number, required: true, default: 1 }, // Hozirgi onboarding bosqichi
  role: { type: String, enum: ["parent", "child"], required: true },
  age: { type: Number },
  learningGoals: [{ type: String }], // O‘rganish maqsadlari
  languageLevel: { type: String, enum: ["beginner", "intermediate", "advanced"] },
  skillsToImprove: [{ type: String }], // Takomillashtirmoqchi bo'lgan ko'nikmalar
  studyTime: { type: Number }, // O‘qish vaqti (daqiqa)
  characterPreference: { type: String, enum: ["boy", "girl"] },
  createdAt: { type: Date, default: Date.now },
});

const Onboarding = mongoose.model("Onboarding", onboardingSchema);
export default Onboarding;
