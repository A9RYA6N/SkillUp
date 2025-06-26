import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes';

config(); 
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

export default app;


