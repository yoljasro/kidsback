import ImageChoice from '../models/choiceModel.mjs';

export const getAllImageChoices = async (req, res) => {
  try {
    const data = await ImageChoice.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createImageChoice = async (req, res) => {
  try {
    const { phrase, options } = req.body;

    const newTask = new ImageChoice({ phrase, options });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const updateImageChoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { phrase, options } = req.body;

    const updated = await ImageChoice.findByIdAndUpdate(id, { phrase, options }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteImageChoice = async (req, res) => {
  try {
    const { id } = req.params;
    await ImageChoice.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
