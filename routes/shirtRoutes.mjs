import express from "express";
import {
  getAllShirtGames,
  createShirtGame,
  getRandomShirtGame
} from "../controllers/shirtController.mjs";

const router = express.Router();

router.get("/", getAllShirtGames); // Barcha shirt savollar
router.post("/", createShirtGame); // Yangi savol qo‘shish
router.get("/random", getRandomShirtGame); // Tasodifiy savol

export default router;
