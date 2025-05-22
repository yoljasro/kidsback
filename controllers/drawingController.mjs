import ContourDrawing from '../models/DrawingModel.mjs';

export const getAllDrawings = async (req, res) => {
  try {
    const drawings = await ContourDrawing.find();
    res.json(drawings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createDrawing = async (req, res) => {
  try {
    const { phrase, imageUrl, options } = req.body;

    const newDrawing = new ContourDrawing({
      phrase,
      imageUrl,
      options
    });

    await newDrawing.save();
    res.status(201).json(newDrawing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create drawing' });
  }
};

export const updateDrawing = async (req, res) => {
  try {
    const { id } = req.params;
    const { phrase, imageUrl, options } = req.body;

    const updatedDrawing = await ContourDrawing.findByIdAndUpdate(
      id,
      { phrase, imageUrl, options },
      { new: true }
    );

    res.json(updatedDrawing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update drawing' });
  }
};

export const deleteDrawing = async (req, res) => {
  try {
    const { id } = req.params;

    await ContourDrawing.findByIdAndDelete(id);
    res.json({ message: 'Drawing deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete drawing' });
  }
};
