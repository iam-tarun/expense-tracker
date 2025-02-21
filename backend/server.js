import express from 'express';
import connectDB from './config/db.js';
import { config } from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import RedisService from './config/redis.js';
import authRoutes from './routes/auth.routes.js'
import passport from './services/auth.service.js';
import authMiddleware from './middleware/auth.middleware.js';
import cookieParser from 'cookie-parser';

config();
connectDB();
(async () => {
  await RedisService.connect();
})();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(authMiddleware);
app.use('/api/home', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('SIGINT', async() => {
  console.log('Shutting down gracefully...');
  await RedisService.disconnect();
  process.exit(0);
});

process.on('SIGTERM', async() => {
  console.log('Process terminated. Cleaning up...');
  await RedisService.disconnect();
  process.exit();
});