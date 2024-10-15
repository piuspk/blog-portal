import dotenv from 'dotenv';
dotenv.config();  // This should be at the top

import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from "./routes/auth.routes.js";
import authRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from './routes/comment.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path';

app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("not connected", err);
  });

const __dirname = path.resolve();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use(cookieParser());
app.use("/api/auth", userRoutes);
app.use("/api/user", authRoutes);
app.use("/api/post", postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const mess = err.message || "internal server error";
  res.status(status).json({ success: false, status, mess });
});
