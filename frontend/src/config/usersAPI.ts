import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000/users' });

export const userAPI = {
  getAll: () => api.get('/users').then((res) => console.log('res.data: ', res.data)),
  getOne: (id: string) => api.get(`users${id}`).then((res) => res.data),
  create: (data: any) => api.post(`/users`, data).then((res) => res.data),
  update: (id: string, data: any) => api.put(`/users${id}`, data).then((res) => res.data),
  delete: (id: string) => api.delete(`/users/id${id}`).then((res) => res.data),
};
