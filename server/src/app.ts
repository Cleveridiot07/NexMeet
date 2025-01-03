import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); //To parse incoming JSON requests;


