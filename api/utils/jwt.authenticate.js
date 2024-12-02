import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {

  const tokens = req.cookies.token;
  console.log(tokens)
  console.log(process.env.JWT_SECRET)
  if (!tokens) {
    console.log("unathorized")
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(tokens, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    console.log("user",user);
    req.user = user;
    console.log(req.user.isAdmin);
    next();
  });
};