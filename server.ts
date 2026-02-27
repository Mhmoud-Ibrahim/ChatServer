

import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import { dbConnections } from './db/dbConnections.js';
import cookieParser from 'cookie-parser'; // 👈 استيراد المكتبة


import { registerChatHandlers } from './src/modules/socket/chatHandler.js';
import { AppError } from './src/utils/appError.js';
import globalErrorHandler from './src/middleware/globalError.js';
import cors from 'cors';
import userRouter from './src/modules/user/user.routes.js';
import imgRouter from './src/modules/imageHandler/imgs.routes.js';
import socketAuth from './src/middleware/socket.js';


const app: Application = express();
app.use(cookieParser());
app.use(express.json());
// إعداد CORS للـ Express
app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // ضروري للسماح بالكوكيز
  allowedHeaders: ['Content-Type', 'Authorization']
}));
const server = http.createServer(app);
app.use('/auth', userRouter);
app.use(imgRouter)
app.use('/uploads', express.static('uploads'));
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // ضروري للسماح بالكوكيز
    allowedHeaders: ['Content-Type', 'Authorization']
  }
});

io.use(socketAuth);
io.on('connection', (socket) => {
  console.log(`🚀 User Authenticated: ${socket.data.userId} (Socket ID: ${socket.id})`);
  registerChatHandlers(io, socket);
  socket.on('disconnect', () => {
    console.log('👋 User Disconnected');
  });
});



dbConnections();
app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} Not Found`, 404))
})

app.use(globalErrorHandler)

const port = 3000;
server.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});
