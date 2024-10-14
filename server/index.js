import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from './routes/comment.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Handle other requests by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const mess = err.message || "internal server error";
  res.status(status).json({ success: false, status, mess });
});

// Database connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("not connected", err);
  });

// Start server
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
