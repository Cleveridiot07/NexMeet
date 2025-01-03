import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/database';
import userRoutes from './routes/user.routes';
import cookieParser from 'cookie-parser';



dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin:"*",
    credentials:true,
}));
app.use(cookieParser());
app.use(express.static("./public"));
app.use(express.json()); //To parse incoming JSON requests;


connectDB();

// Routes
app.use('/api/users', userRoutes);

export default app;


