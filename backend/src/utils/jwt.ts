import jwt from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '1d';

export interface JWTPayload {
  email: string;
  accountId: string;
}

/**
 * Generates a JWT token for an account
 * @param payload - Account data to encode in token (email and accountId are required)
 * @returns JWT token string
 */
export const generateToken = (payload: JWTPayload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  } as jwt.SignOptions);
};

/**
 * Verifies and decodes a JWT token
 * @param token - JWT token string
 * @returns Decoded token payload or null if invalid
 */
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    console.log('Error verifying token:', error);
    return null;
  }
};
