import Recipe from "../models/recipes.js";
// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      price,
      difficulty
    } = req.body;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`:null;

    // Create a new recipe document
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      image : imageUrl,
      price,
      difficulty
    });

    // Save the recipe to the database
    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a recipe by ID
export const updateRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const {
      title,
      description,
      ingredients,
      instructions,
      price,
      difficulty
    } = req.body;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`:null;

    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        title,
        description,
        ingredients,
        instructions,
        image : imageUrl,
        price,
        difficulty
      },
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a recipe by ID
export const deleteRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findByIdAndDelete(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
