// Axios instance
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a requst interceptor to include token if needed
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('tokenWinebar');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const logout = () => {
    localStorage.removeItem('tokenWinebar');
    localStorage.removeItem('user')
}

export default apiClient;