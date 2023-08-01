import Recipe from "../models/recipes.js";

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      image,
      price,
      difficulty
    } = req.body;

    // Validate the required fields
    if (!title || !description || !ingredients || !instructions || !difficulty) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new recipe document
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      image,
      price,
      difficulty
    });

    // Save the recipe to the database
    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    console.error(error);
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

export const bergursRecipes = async (req, res) => {
  try {
    const keyword = "Burger"; // Get the keyword from the request query

    // Use the Recipe model to perform the search
    const recipes = await Recipe.find({ title: { $regex: keyword, $options: 'i' } });

    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while searching for recipes.' });
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
    console.log(recipeId);
    const recipe = await Recipe.findByIdAndDelete(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const searchRecipesByTitleHandler = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    console.log('Search Query:', searchQuery);

    const recipes = await Recipe.find({ $text: { $search: searchQuery } });
    console.log('Search Results:', recipes);

    res.json(recipes);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'Error occurred while searching for recipes' });
  }
};

export const getRecipesByDifficulty = async (req, res) => {
  const { difficulty } = req.params;
  try {
    const recipes = await Recipe.findByDifficulty(difficulty);
    res.json(recipes);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecipesAlph = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ title: 1 }); 
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  } 
};
