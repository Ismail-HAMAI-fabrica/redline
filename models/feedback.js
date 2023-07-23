import mongoose from 'mongoose';

// Define the feedback schema
const feedbackSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  feedback:{
    type: String,
    require:true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  addedAt: {
    type: Date,
    default: Date.now
  } 
});

// Create the feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;