import axios from 'axios';

export const loginUser = async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const getUserRole = () => {
  return localStorage.getItem('role');
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};
