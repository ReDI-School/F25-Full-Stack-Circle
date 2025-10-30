import axios from 'axios';

import type { User } from './user.types';

const api = axios.create({ baseURL: 'http://localhost:4000/' });

const usersData = (res: { data: User }) => res.data;

export const userAPI = {
  getAll: () => api.get<User>('/users').then(usersData),
  getOne: (id: string) => api.get<User>(`users${id}`).then(usersData),
  create: (data: User) => api.post<User>(`/users`, data).then(usersData),
  update: (id: string, data: User) => api.put<User>(`/users${id}`, data).then(usersData),
  delete: (id: string) => api.delete(`/users/id${id}`).then(usersData),
};
