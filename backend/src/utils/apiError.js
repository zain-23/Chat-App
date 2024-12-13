class ApiError extends Error {
  constructor(message = 'Something went wrong', status, stack = '', errors = []) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
