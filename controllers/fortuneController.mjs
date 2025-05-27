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

// ✅ POST controller
export const createInstruction = async (req, res) => {
  try {
    const { type, content } = req.body;
    if (!type || !content) {
      return res.status(400).json({ message: "type va content talab qilinadi" });
    }

    const newInstruction = new GameContent({ type, content });
    await newInstruction.save();

    res.status(201).json(newInstruction);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
