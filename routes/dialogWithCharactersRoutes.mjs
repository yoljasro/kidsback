import express from "express";
import {
  getAllCharacterGames,
  getCharacterGameById,
  createCharacterGame,
  deleteCharacterGame
} from "../controllers/dialogWithCharactersController.mjs";

const router = express.Router();

router.get("/", getAllCharacterGames);
router.get("/:id", getCharacterGameById);
router.post("/", createCharacterGame);
router.delete("/:id", deleteCharacterGame);

export default router;
