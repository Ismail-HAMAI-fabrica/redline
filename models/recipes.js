import mongoose from 'mongoose';

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
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
      type: String
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

recipeSchema.index({ title: 'text' });
recipeSchema.statics.findByDifficulty = function (difficulty) {
  return this.find({ difficulty: difficulty });
};


const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;