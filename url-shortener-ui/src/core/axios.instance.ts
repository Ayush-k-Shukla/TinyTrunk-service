import axios from 'axios';

export const BASE_URL = 'https://url-shortner-backend-oi5n.onrender.com';
// export const BASE_URL = 'http://localhost:4000';

// Create a base Axios instance with custom configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL + '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
