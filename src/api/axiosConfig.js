import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com',
  timeout: 10000, // tempo máximo de espera de 10 segundos
  headers: { 'Authorization': 'Bearer token-aqui' },
});

export default api;
