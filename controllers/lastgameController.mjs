import Dialog from '../models/lastGame.mjs';

// Get all dialog content
export const getAllDialogs = async (req, res) => {
  try {
    const dialogs = await Dialog.find();
    res.json(dialogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create new dialog content
export const createDialog = async (req, res) => {
  try {
    const { question, options, imageUrl } = req.body;
    const newDialog = new Dialog({ question, options, imageUrl });
    await newDialog.save();
    res.status(201).json(newDialog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating dialog', error });
  }
};

