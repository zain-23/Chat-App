import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import jwt from 'jsonwebtoken';
import { USER } from '../models/user.model.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.chat_access_token || req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    throw new ApiError('Unauthorized Error', 401);
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const user = await USER.findById(decodedToken._id).select('-password');

  if (!user) {
    throw new ApiError('Unauthorized Error', 401);
  }

  req.user = user;
  next();
});

export default verifyToken;
