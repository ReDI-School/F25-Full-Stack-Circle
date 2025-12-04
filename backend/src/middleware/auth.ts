import { NextFunction, Request, Response } from 'express';

import { JWTPayload, verifyToken } from '../utils/jwt';

/**
 * Extend Express Request to include account data from JWT
 */
declare module 'express-serve-static-core' {
  interface Request {
    account?: JWTPayload;
  }
}

/**
 * Authentication middleware
 * Verifies JWT token from Authorization header
 * Attaches account data to request if valid
 * Note: Authentication is at Account level (email/password are on Account model)
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Authentication required. Please provide a valid token.',
      });
    }

    // Extract token (remove "Bearer " prefix)
    const token = authHeader.substring(7);

    const payload = verifyToken(token);

    if (!payload) {
      return res.status(401).json({
        error: 'Invalid or expired token. Please login again.',
      });
    }

    req.account = payload;
    next();
  } catch {
    return res.status(401).json({
      error: 'Authentication failed',
    });
  }
};
