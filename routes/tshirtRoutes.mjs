import express from "express";
import {
  getAllTshirts,
  createTshirt,
  getRandomTshirtQuestion
} from "../controllers/tshirtController.mjs";

const router = express.Router();

router.get("/", getAllTshirts); // Barcha futbolkalar
router.post("/", createTshirt); // Yangi futbolka qo‘shish
router.get("/question/random", getRandomTshirtQuestion); // Savol + javob

export default router;
