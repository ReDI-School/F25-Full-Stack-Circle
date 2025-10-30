import { userAPI } from '../config/usersAPI';
import useSWR from 'swr';

export const useUsers = () => {
  const { data, error, mutate } = useSWR('users', userAPI.getAll);

  return {
    users: data,
    loading: !data && !error,
    error,
    refetch: mutate,
  };
};
