import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-backend-api-url.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
