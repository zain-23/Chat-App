import { Router } from 'express';
import { GetUser, Login, Register } from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const userRoute = Router();

userRoute.get('/', authMiddleware, GetUser);
userRoute.post('/login', Login);
userRoute.post('/register', Register);

export default userRoute;
