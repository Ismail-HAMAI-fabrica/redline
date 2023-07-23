import Feedback from "../models/feedback.js";
import User from "../models/profiles.js";


// Create a new feedback entry
export const createFeedback = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      const { feedback, rating } = req.body;
      console.log(user.username);
      const newFeedback = new Feedback({ user: user.username, feedback, rating });
      await newFeedback.save();
  
      res.status(201).json({ message: 'Feedback saved successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to save feedback.' });
    }
  };

// Retrieve all feedback entries
export const getAllFeedback = async (req, res) => {
  try {
    const currentDate = new Date();
    const feedbacks = await Feedback.find({ addedAt: { $lte: currentDate } })
      .sort({ addedAt: 'desc' }) // Sort by createdAt in descending order
      .limit(3);

    // Calculate the time difference between createdAt and currentDate for sorting
    feedbacks.sort((a, b) => currentDate - a.addedAt - (currentDate - b.addedAt));

    res.status(200).json(feedbacks);
    console.log(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve feedback.' });
  }
};

// Update a feedback entry
export const updateFeedback = async (req, res) => {
  const { feedbackId } = req.params;
  const { rating } = req.body;

  try {
    await Feedback.findByIdAndUpdate(feedbackId, { rating });
    res.status(200).json({ message: 'Feedback updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update feedback.' });
  }
};

// Delete a feedback entry
export const deleteFeedback = async (req, res) => {
  const { feedbackId } = req.params;

  try {
    await Feedback.findByIdAndDelete(feedbackId);
    res.status(200).json({ message: 'Feedback deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete feedback.' });
  }
};
