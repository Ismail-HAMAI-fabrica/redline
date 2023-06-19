import mongoose from 'mongoose';

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [{
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  }],
  instructions: [{
    step: {
      type: String,
      required: true,
    },
  }],
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'], // example categories
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;