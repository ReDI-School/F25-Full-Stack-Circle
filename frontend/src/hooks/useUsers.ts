import useSWR from 'swr';

import { userAPI } from '../config/usersAPI';
import type { User } from '../config/user.types';

export const useUsers = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<User[]>('users', userAPI.getAll);

  return {
    users: data ?? [],
    loading: !data && !error,
    error,
    refetch: mutate,
  };
};
