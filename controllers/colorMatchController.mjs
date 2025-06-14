import ColorMatch from '../models/colorMatch.mjs';

export const createColorMatch = async (req, res) => {
  try {
    const newTask = await ColorMatch.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllColorMatches = async (req, res) => {
  try {
    const tasks = await ColorMatch.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getRandomColorMatch = async (req, res) => {
  try {
    const count = await ColorMatch.countDocuments();
    const random = Math.floor(Math.random() * count);
    const task = await ColorMatch.findOne().skip(random);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const checkAnswer = async (req, res) => {
  try {
    const { taskId, answers } = req.body;
    const task = await ColorMatch.findById(taskId);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    const isCorrect = task.items.every((item, index) => {
      return item.correctColor === answers[index];
    });

    res.json({
      result: isCorrect ? 'correct' : 'incorrect',
      correctAnswers: task.items.map(i => i.correctColor)
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
