import { Router } from 'express';
import { GetUser, Login, Register } from '../controllers/user.controller.js';

const userRoute = Router();

userRoute.get('/', GetUser);
userRoute.post('/login', Login);
userRoute.post('/register', Register);

export default userRoute;
