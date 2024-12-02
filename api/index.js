import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import userRoutes from './routes/auth.routes.js';
import authRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';






// Connect to MongoDB
mongoose.connect(process.env.DB)
  .then(() => console.log("db connected"))
  .catch(err => console.log("not connected", err));
  
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());
// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Define API routes
app.use('/api/auth', userRoutes);
app.use('/api/user', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// Serve static files from the client
app.use(express.static(path.join(__dirname, '/client/dist')));

// Handle client-side routing for SPA (React/Next.js)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


