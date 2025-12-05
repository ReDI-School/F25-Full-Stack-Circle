import useSWR from 'swr';

import type { User } from '../api/users/users.types';
import { userAPI } from '../api/users/usersAPI';

export const useUsers = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<User[]>('users', userAPI.getAll);

  return {
    users: data ?? [],
    isLoading,
    isValidating,
    error,
    refetch: mutate,
  };
};
