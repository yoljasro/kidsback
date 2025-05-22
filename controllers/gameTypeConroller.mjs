import GameType4 from '../models/gameType.mjs';

// Get all games
export const getAllGames = async (req, res) => {
  try {
    const games = await GameType4.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a single game by ID
export const getGameById = async (req, res) => {
  try {
    const game = await GameType4.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create a new game
export const createGame = async (req, res) => {
  try {
    const { question, answers } = req.body;
    const newGame = new GameType4({ question, answers });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: 'Error creating game', error: err.message });
  }
};

// Update a game
export const updateGame = async (req, res) => {
  try {
    const { question, answers } = req.body;
    const updatedGame = await GameType4.findByIdAndUpdate(
      req.params.id,
      { question, answers },
      { new: true }
    );
    if (!updatedGame) return res.status(404).json({ message: 'Game not found' });
    res.json(updatedGame);
  } catch (err) {
    res.status(500).json({ message: 'Error updating game', error: err.message });
  }
};

// Delete a game
export const deleteGame = async (req, res) => {
  try {
    const deletedGame = await GameType4.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: 'Game not found' });
    res.json({ message: 'Game deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting game', error: err.message });
  }
};
