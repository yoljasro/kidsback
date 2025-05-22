import express from "express";
import {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
} from "../controllers/dialogController.mjs";

const router = express.Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);
router.post("/", createGame);
router.delete("/:id", deleteGame);

export default router;
