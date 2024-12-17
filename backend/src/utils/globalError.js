import ApiError from './apiError.js';

const globalErrorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors = [];

  if (err instanceof ApiError) {
    statusCode = err.status;
    message = err.message;
    errors = err.errors;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors
  });
};
export default globalErrorHandler;
