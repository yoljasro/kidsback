// controllers/gameContentController.js
import GameContent from '../models/fortuneModel.mjs';

export const getInstruction = async (req, res) => {
  try {
    const instruction = await GameContent.findOne({ type: 'instruction' });
    if (!instruction) {
      return res.status(404).json({ message: 'Instruction not found' });
    }
    res.status(200).json(instruction);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
