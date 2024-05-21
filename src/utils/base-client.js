import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE || 'http://localhost:5000/api',
});

export default client;