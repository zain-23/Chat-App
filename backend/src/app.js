import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './utils/globalError.js';

const app = express();
// application middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const http = createServer(app);
const io = new Server(http); // io initialize
// connect to db
connectDB();
// router middleware
app.use('/api/user', userRouter);

// Web Socket work
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);
});

// Error middleware
app.use(globalErrorHandler);

http.listen(4000, () => {
  console.log('Socket server is running');
});
