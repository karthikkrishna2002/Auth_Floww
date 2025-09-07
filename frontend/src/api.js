import axios from 'axios';

// Match API host to the page host during development to reduce CORS/site issues
const API_BASE_URL = `${window.location.protocol}//${window.location.hostname}:5000/api`;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export async function register(payload) {
  const res = await api.post('/auth/register', payload);
  return res.data;
}

export async function login(payload) {
  const res = await api.post('/auth/login', payload);
  return res.data;
}

export async function logout() {
  const res = await api.post('/auth/logout');
  return res.data;
}

export async function getMe() {
  const res = await api.get('/auth/me');
  return res.data;
}


