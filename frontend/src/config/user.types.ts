export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  accountId: string;
}

export interface CreateUserDTO {
  name?: string;
  email: string;
  password: string;
  accountId: string;
}
