import axios from 'axios';

import type { User, CreateUserDTO } from './user.types';

const api = axios.create({ baseURL: 'http://localhost:4000/' });

const extractUser = <T>(res: { data: T }) => res.data;

export const userAPI = {
  getAll: () => api.get<User[]>('/users').then(extractUser),

  getOne: (id: number) => api.get<User>(`/users/${id}`).then(extractUser),

  create: (data: CreateUserDTO) => api.post<User>('/users', data).then(extractUser),

  update: (id: number, data: Partial<User>) =>
    api.put<User>(`/users/${id}`, data).then(extractUser),

  delete: (id: number) => api.delete(`/users/${id}`).then((r) => r.status === 200),
};
