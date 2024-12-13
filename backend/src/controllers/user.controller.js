import { USER } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import bcrypt from 'bcrypt';

const Register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  const isEmpty = [fullName, email, password].some((field) => !field);
  // check all field required
  if (isEmpty) {
    throw new ApiError('All fields are required', 400);
  }

  // if email already exists throw error
  const alreadyExist = await USER.findOne({ email });
  if (alreadyExist) {
    throw new ApiError('Email already exists');
  }
  // hash the password
  const hashPassword = await bcrypt.hash(password, 10);
  // save into db
  await USER.create({
    email,
    fullName,
    password: hashPassword
  });
  // return the response to user
  return res.status(200).json(new ApiResponse('User registered', { fullName, email }, 200));
});

const Login = () => {};

const GetUser = (req, res) => {
  return res.send('Hello');
};

export { Register, Login, GetUser };
