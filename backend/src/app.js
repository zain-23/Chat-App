import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

// application middleware
dotenv.config();

const app = express();
const http = createServer(app);
const io = new Server(http); // io initialize

// get route
app.get('/', (req, res) => {
  console.log('Hello  World');
  res.send('Hello world');
});

// Web Socket work
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);
});

http.listen(4000, () => {
  console.log('Socket server is running');
});
