import axios from 'axios';
import API_URL from './config';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL, // Replace with your base URL
    timeout: 10000, // Set a timeout for requests (optional)
    headers: {
        'Content-Type': 'application/json', // Default headers
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add Authorization token if available
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Process successful response
        return response;
    },
    (error) => {
        // Handle response errors
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login)
            console.log('Unauthorized, logging out...');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
