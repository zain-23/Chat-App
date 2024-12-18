import { AxiosError, AxiosResponse } from 'axios';

interface SuccessResponse<T> extends AxiosResponse<T> {
  message: string;
  status: number;
  success: boolean;
  data: T;
}

interface ErrorResponse extends AxiosError {
  success: boolean;
  message: string;
}

type User = {
  _id: string;
  fullName: string;
  email: string;
};

export type { SuccessResponse, ErrorResponse, User };
