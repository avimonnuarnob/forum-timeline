import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};
