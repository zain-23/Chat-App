import axios from 'axios';

const userInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export { userInstance };
