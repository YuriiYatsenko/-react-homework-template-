import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6682531504acc3545a090ded.mockapi.io/contacts', // нова базова URL-адреса
});

export default api;
