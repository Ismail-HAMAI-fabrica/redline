//This file contains all of the other route files and is just a way to organize the project

import express from 'express';
import { VerifyToken, isAdmin, isCustomer } from '../middlewares/auth.middleware.js';
import authRouter from './auth.routes.js';
import { createOrder } from '../controllers/ordercontrollers.js';
import { createRecipe } from '../controllers/recipescontrollers.js';
import { createFactur } from '../controllers/facturcontroller.js';
import multer from '../middlewares/multer-cfg.js';

const router = express.Router();

router.use('/auth', authRouter);
// POST route for creating a new order and generating a factur
router.post('/order/:id',VerifyToken,isCustomer, createOrder);



router.post('/createRecipe',VerifyToken,isAdmin,multer,createRecipe);




router.post('/createFactur/:id',VerifyToken,isAdmin,createFactur);


export default router;



 