import GameType5 from '../models/propor.mjs';

// Get all games
export const getAllGames = async (req, res) => {
  try {
    const games = await GameType5.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a single game by ID
export const getGameById = async (req, res) => {
  try {
    const game = await GameType5.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create a new game
export const createGame = async (req, res) => {
  try {
    const { question, pairs, options } = req.body;
    const newGame = new GameType5({ question, pairs, options });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: 'Error creating game', error: err.message });
  }
};

// Update a game
export const updateGame = async (req, res) => {
  try {
    const { question, pairs, options } = req.body;
    const updatedGame = await GameType5.findByIdAndUpdate(
      req.params.id,
      { question, pairs, options },
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
    const deletedGame = await GameType5.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: 'Game not found' });
    res.json({ message: 'Game deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting game', error: err.message });
  }
};
