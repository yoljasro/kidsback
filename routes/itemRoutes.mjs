import express from "express";
import {
  getAllItems,
  createItem,
  getRandomQuestion
} from "../controllers/itemController.mjs";

const router = express.Router();

// Barcha itemlar
router.get("/", getAllItems);

// Yangi item qo‘shish
router.post("/", createItem);

// Tasodifiy savol (например: "Какого цвета мяч?")
router.get("/question/random", getRandomQuestion);

export default router;
