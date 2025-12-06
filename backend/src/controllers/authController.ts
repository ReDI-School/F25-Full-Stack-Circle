import { Request, Response } from 'express';

import { AccountService } from '../services/accountService';
import { handleError } from '../utils/errorHandler';
import { generateToken, type JWTPayload } from '../utils/jwt';
import { comparePassword } from '../utils/password';
import { validateEmail, validatePassword } from '../utils/validation';

const accountService = new AccountService();

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: 'Email and password are required',
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          error: 'Invalid email format',
        });
      }

      const account = await accountService.findByEmail(email);

      if (!account) {
        return res.status(401).json({
          error: 'Invalid email or password',
        });
      }

      const isValidPassword = await comparePassword(password, account.password);

      if (!isValidPassword) {
        return res.status(401).json({
          error: 'Invalid email or password',
        });
      }

      const payload: JWTPayload = {
        email: account.email,
        accountId: account.id,
      };

      const token = generateToken(payload);

      res.json({
        token,
        account: payload,
      });
    } catch (error) {
      handleError(error, res, undefined, 'Failed to login');
    }
  }

  async signUp(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: 'Email and password are required',
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

      const existingAccount = await accountService.findByEmail(email);

      if (existingAccount) {
        return res.status(409).json({
          error: 'An account with this email already exists',
        });
      }

      const account = await accountService.createAccount({ email, password });

      const payload: JWTPayload = {
        email: account.email,
        accountId: account.id,
      };

      const token = generateToken(payload);

      res.status(201).json({
        token,
        account: payload,
      });
    } catch (error) {
      handleError(error, res, {
        uniqueConstraint: 'An account with this email already exists',
      });
    }
  }

  async verifyToken(req: Request, res: Response) {
    try {
      // The authenticate middleware already verified the token and attached account to req
      // This endpoint just returns the account info
      if (!req.account) {
        return res.status(401).json({
          error: 'Invalid token',
        });
      }

      res.json({
        account: req.account,
      });
    } catch (error) {
      handleError(error, res, undefined, 'Failed to verify token');
    }
  }
}
