import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';

const app = express();
// application middleware
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const http = createServer(app);
const io = new Server(http); // io initialize
// connect to db
connectDB();
// get route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// router middleware
app.use('/api/user', userRouter);

// Web Socket work
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);
});

http.listen(4000, () => {
  console.log('Socket server is running');
});
