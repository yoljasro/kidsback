import multer from "multer";
import path from "path";

// Faylni saqlash uchun konfiguratsiya
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Faylni yuklash joyi
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Fayl nomini berish
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Faqat rasm yuklash mumkin!"), false);  // Faqat rasmni ruxsat berish
  }
};

// upload.fields() orqali bir nechta faylni yuklash
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
