import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  type: { type: String }, // masalan, 'consistency', 'lessons', 'words'
  value: { type: Number }, // 1/4, 4/4 va h.k
});

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  name: { type: String },
  age: { type: Number },
  avatar: { type: String }, // avatar rasmi (URL yoki ID)
  daysStreak: { type: Number, default: 0 },
  lessonsCount: { type: Number, default: 0 },
  wordsCount: { type: Number, default: 0 },
  streakCalendar: [{ type: Date }], // faollik kunlari
  achievements: [achievementSchema],
  settings: {
    sound: { type: Boolean, default: true },
    vibration: { type: Boolean, default: false },
    language: { type: String, default: "uz" },
  },
  createdAt: { type: Date, default: Date.now },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
