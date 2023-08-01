//This file contains all of the other route files and is just a way to organize the project

import express, { Router } from 'express';
import { VerifyToken, isAdmin, isCustomer } from '../middlewares/auth.middleware.js';
import authRouter from './auth.routes.js';
import { createOrder, deleteOrder, getOrdersOfTheDay } from '../controllers/ordercontrollers.js';
import { bergursRecipes, createRecipe, deleteRecipeById, getAllRecipes, getRecipesAlph,  getRecipesByDifficulty, searchRecipesByTitleHandler } from '../controllers/recipescontrollers.js';
import { createFactur, getFacturById } from '../controllers/facturcontroller.js';
import { createFeedback, getAllFeedback } from '../controllers/feedbackcontrollers.js';


const router = express.Router();

router.use('/auth', authRouter);
// POST route for creating a new order and generating a factur
router.post('/order/:id',VerifyToken,isCustomer, createOrder);
router.get('/getOrdersOfTheDay',VerifyToken,isAdmin,getOrdersOfTheDay)
router.delete('/deleteOrder/:id',VerifyToken,isAdmin,deleteOrder)



//  ----------------------------
router.post('/createRecipe',VerifyToken,isAdmin,createRecipe);
router.delete('/deleteRecipe/:recipeId', VerifyToken, isAdmin, deleteRecipeById);
router.get('/getAllRecipes',getAllRecipes);
router.get('/bergursRecipes',bergursRecipes);
router.get('/searchRecipesByTitle/:searchQuery',searchRecipesByTitleHandler);
router.get('/getRecipesAl',getRecipesAlph);
router.get('/getRecipesByDiffi/:difficulty',getRecipesByDifficulty)




// ---------------------------------
router.post('/feedback',VerifyToken,isCustomer,createFeedback);
router.get('/getAllFeedback',getAllFeedback)






router.put('/createFactur/:id',VerifyToken,isAdmin,createFactur);
router.get('/getFacturById',getFacturById)


export default router;
 


 