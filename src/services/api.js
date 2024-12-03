import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Додавання токена до запитів
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const register = (credentials) => API.post('/auth/register', credentials);
export const fetchItems = () => API.get('/items');
export const addItem = (item) => API.post('/items', item);
