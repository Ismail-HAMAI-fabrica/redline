//This file contains all of the other route files and is just a way to organize the project

import express from 'express';
import { VerifyToken, isAdmin, isCustomer } from '../middlewares/auth.middleware.js';
import authRouter from './auth.routes.js';
import { createOrder } from '../controllers/ordercontrollers.js';
import { bergursRecipes, createRecipe, deleteRecipeById, getAllRecipes, searchRecipes } from '../controllers/recipescontrollers.js';
import { createFactur } from '../controllers/facturcontroller.js';


const router = express.Router();

router.use('/auth', authRouter);
// POST route for creating a new order and generating a factur
router.post('/order/:id',VerifyToken,isCustomer, createOrder);


 
router.post('/createRecipe',VerifyToken,isAdmin,createRecipe);
router.delete('/deleteRecipe/:recipeId', VerifyToken, isAdmin, deleteRecipeById);
router.get('/getAllRecipes',getAllRecipes);
router.get('/bergursRecipes',bergursRecipes);
router.get('/searchRecipes/:query/:difficulty?',searchRecipes);






router.post('/createFactur/:id',VerifyToken,isAdmin,createFactur);


export default router;
 


 