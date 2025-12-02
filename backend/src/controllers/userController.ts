import { Request, Response } from 'express';

import { UserService } from '../services/userService';
import { handleError } from '../utils/errorHandler';
import { validateEmail, validateId, validatePassword } from '../utils/validation';

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
      const { email, password, name, accountId } = req.body;

      if (!email || !password || !accountId) {
        return res.status(400).json({
          error: 'Email, password, and accountId are required',
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          error: 'Invalid email format',
        });
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        return res.status(400).json({
          error: passwordValidation.error,
        });
      }

      const user = await userService.createUser({
        email: email.trim(),
        password,
        name: name?.trim(),
        accountId,
      });

      res.status(201).json({ user });
    } catch (error) {
      handleError(error, res, {
        uniqueConstraint: 'Email already exists',
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

      const { email, name } = req.body;

      if (email && !validateEmail(email)) {
        return res.status(400).json({
          error: 'Invalid email format',
        });
      }

      const user = await userService.updateUser(id, {
        email: email?.trim(),
        name: name?.trim(),
      });

      res.json({ user });
    } catch (error) {
      handleError(error, res, {
        recordNotFound: 'User not found',
        uniqueConstraint: 'Email already exists',
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
