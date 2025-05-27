import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.mjs";
import onboardingRoutes from "./routes/onboardingRoutes.mjs"
import profileRoutes from "./routes/profileRoutes.mjs"; // ✅ Qo‘shildi
import greetingGameRoutes from "./routes/geetingGameRoutes.mjs";
import coloringGame from "./routes/coloringRoutes.mjs";
import wordRoutes from './routes/wordRoutes.mjs';
import chestRoutes from './routes/chestRoutes.mjs';
import answerSelectionRoutes from './routes/answerSelectRoute.mjs';
import wheelPhraseRoutes from './routes/wheelPhraseRoutes.mjs';
import itemRoutes from './routes/itemRoutes.mjs';
import tshirRoutes from "./routes/tshirtRoutes.mjs"
import colorMatchRoutes from './routes/colorMatchRoutes.mjs';
import dialogGameRoutes from "./routes/dialogRoutes.mjs";
import dialogWithCharactersRoutes from "./routes/dialogWithCharactersRoutes.mjs";
import gameTypeRoutes from "./routes/gameTypeRoutes.mjs";
import proporRoutes from "./routes/proporRoutes.mjs"
import silhouetteRoutes from './routes/silhouetteRoutes.mjs';
import chatRoutes from "./routes/charRoutes.mjs"
import lastGame from "./routes/lastGameRoute.mjs"
import drawing from "./routes/drawingRoutes.mjs"
import imageChoiceRoutes from './routes/choiceRoutes.mjs';
import gameContentRoutes from './routes/fortuneRoutes.mjs';
import shirtGameRoutes from "./routes/shirtRoutes.mjs";




// .env faylini yuklash
dotenv.config();

const app = express();
// Middleware lar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // Rasmlarni ochiq qilish

// MongoDB ga ulanish
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDBga muvaffaqiyatli ulandi ✅"))
    .catch((err) => console.error("MongoDB ulanish xatosi ❌", err));

// API marshrutlari
app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes)
app.use("/api/profile", profileRoutes);
app.use("/api/greetings", greetingGameRoutes);
app.use("/api/colorings", coloringGame)
app.use('/api/words', wordRoutes);
app.use('/api/chest-words', chestRoutes);
app.use('/api/wheel-phrases', wheelPhraseRoutes);
app.use('/api/items', itemRoutes);
app.use("/api/tshirts", tshirRoutes) 
app.use('/api/color-match', colorMatchRoutes);
app.use("/api/dialog-game", dialogGameRoutes);
app.use("/api/dialog-character-game", dialogWithCharactersRoutes);
app.use("/api/gametypes" ,gameTypeRoutes )  
app.use('/api/answer-selection', answerSelectionRoutes);
app.use("/api/propor" , proporRoutes)
app.use("/api/chats" , chatRoutes)
app.use('/api/silhouette', silhouetteRoutes);   
app.use("/api/lastgame" , lastGame)
app.use("/api" , drawing)
app.use("/api", imageChoiceRoutes);
app.use('/api', gameContentRoutes);
app.use("/api/shirt-game", shirtGameRoutes); // API marshruti





// Xatoliklarni ushlash uchun middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Ichki server xatosi!" });
});

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
});


