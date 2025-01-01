import express from 'express';
import connectDB from './config/db.js';
import { config } from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import authMiddleware from './middleware/auth.middleware.js';

config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(authMiddleware);
app.use('/api', userRoutes);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));