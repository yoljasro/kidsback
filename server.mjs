import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.mjs";
import onboardingRoutes from "./routes/onboardingRoutes.mjs"

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
app.use("/api/onboarding" , onboardingRoutes)

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
