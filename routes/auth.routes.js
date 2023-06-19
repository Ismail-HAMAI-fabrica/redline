import express from 'express';
import { register, getAllUsers, login, deleteUser } from '../controllers/profilescontrollers.js';
import { VerifyToken } from '../middlewares/auth.middleware.js';

const authRouter = express.Router();

authRouter.post('/reg', register);
authRouter.get('/all', getAllUsers);
authRouter.post('/login', login);
authRouter.delete('/delete/user/:id', deleteUser);

export default authRouter;
