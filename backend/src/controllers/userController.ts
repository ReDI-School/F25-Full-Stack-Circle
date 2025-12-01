import { Request, Response } from 'express';

import { handleError } from '../libs/errorHandler';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();

      res.json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      handleError(error, res, undefined, 'Failed to fetch users');
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.getUserById(id);

      if (!user) return res.status(404).json({ error: 'User not found' });

      res.json({ user });
    } catch (error) {
      handleError(error, res, {
        recordNotFound: 'User not found',
      });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = await userService.createUser(body);

      res.status(201).json({ user });
    } catch (error) {
      console.error('Error creating user:', error);
      handleError(error, res, {
        uniqueConstraint: 'Email already exists',
        foreignKeyConstraint: 'Invalid account ID',
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const user = await userService.updateUser(id, body);

      res.json({ user });
    } catch (error) {
      console.error('Error updating user:', error);
      handleError(error, res, {
        recordNotFound: 'User not found',
        uniqueConstraint: 'Email already exists',
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await userService.deleteUser(id);

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      handleError(error, res, {
        recordNotFound: 'User not found',
      });
    }
  }
}
