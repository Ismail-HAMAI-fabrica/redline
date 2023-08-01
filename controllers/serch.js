import Recipe from "../models/recipes.js";

export const searchRecipesByTitle = async (searchQuery) => {
  try {
    const recipes = await Recipe.find({ $text: { $search: searchQuery } });
    return recipes;
  } catch (error) {
    throw error;
  }
};