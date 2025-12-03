import { Request, Response } from 'express';

import { UserService } from '../services/userService';
import { handleError } from '../utils/errorHandler';
import { validateId } from '../utils/validation';

const userService = new UserService();

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();

      res.json({ users });
    } catch (error) {
      handleError(error, res, undefined, 'Failed to fetch users');
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const id = validateId(req.params.id);

      if (id === null) {
        return res.status(400).json({
          error: 'Invalid ID parameter. ID must be a positive integer.',
        });
      }

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
      const { name, accountId } = req.body;

      const trimmedName = name?.trim();

      if (!trimmedName || !accountId) {
        return res.status(400).json({
          error: 'Name and accountId are required',
        });
      }

      const user = await userService.createUser({
        name: trimmedName,
        accountId,
      });

      res.status(201).json({ user });
    } catch (error) {
      handleError(error, res, {
        foreignKeyConstraint: 'Invalid account ID',
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const id = validateId(req.params.id);

      if (id === null) {
        return res.status(400).json({
          error: 'Invalid ID parameter. ID must be a positive integer.',
        });
      }

      const { name } = req.body;
      const trimmedName = name?.trim();

      if (!trimmedName) {
        return res.status(400).json({
          error: 'Name is required',
        });
      }

      const user = await userService.updateUser(id, {
        name: trimmedName,
      });

      res.json({ user });
    } catch (error) {
      handleError(error, res, {
        recordNotFound: 'User not found',
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = validateId(req.params.id);

      if (id === null) {
        return res.status(400).json({
          error: 'Invalid ID parameter. ID must be a positive integer.',
        });
      }

      await userService.deleteUser(id);

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      handleError(error, res, {
        recordNotFound: 'User not found',
      });
    }
  }
}
