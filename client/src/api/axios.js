// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Use the correct URL for your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
