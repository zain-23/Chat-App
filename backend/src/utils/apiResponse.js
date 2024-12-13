class ApiResponse {
  constructor(message = 'Success', data, status) {
    this.message = message;
    this.data = data;
    this.status = status;
    this.success = status < 400;
  }
}

export default ApiResponse;
