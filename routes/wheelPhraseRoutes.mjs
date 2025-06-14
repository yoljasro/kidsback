import express from "express";
import {
  createWheelPhrase,
  getAllWheelPhrases,
  getRandomWheelPhrase,
  getPhraseByOrder,
} from "../controllers/wheelPhraseController.mjs";

const router = express.Router();

// Yangi ibora qo'shish
router.post("/", createWheelPhrase);

// Barcha iboralarni olish
router.get("/", getAllWheelPhrases);

// Tasodifiy ibora olish
router.get("/random", getRandomWheelPhrase);

// Order bo'yicha ibora olish
router.get("/next/:order", getPhraseByOrder);

export default router;
