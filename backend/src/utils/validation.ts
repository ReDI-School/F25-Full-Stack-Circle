import { Request, Response } from 'express';

/**
 * Validates and sanitizes an ID parameter from the request
 * @param id - The ID string from request params
 * @returns Validated ID as number, or null if invalid
 */
export const validateId = (id: string | undefined) => {
  if (!id) return null;

  const sanitized = id.trim();
  const parsed = Number(sanitized);

  // Validate: must be a number, positive integer, and not NaN
  if (isNaN(parsed) || !Number.isInteger(parsed) || parsed <= 0) return null;

  return parsed;
};
/**
 * Middleware to validate ID parameter in route
 * Returns 400 if ID is invalid
 */
export const validateIdParam = (req: Request, res: Response, next: () => void) => {
  const id = validateId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      error: 'Invalid ID parameter. ID must be a positive integer.',
    });
  }

  // Attach validated ID to request for use in controller
  req.params.id = id.toString();
  next();
};

/**
 * Validates email format
 * @param email - Email string to validate
 * @returns true if valid, false otherwise
 */
export const validateEmail = (email: string) => {
  if (!email || typeof email !== 'string') return false;

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validates password strength
 * @param password - Password string to validate
 * @param minLength - Minimum password length (default: 4)
 * @param maxLength - Maximum password length (default: 60)
 * @returns Object with isValid boolean and error message if invalid
 */
export const validatePassword = (password: string, minLength = 4, maxLength = 60) => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      error: `Password must be at least ${minLength} characters long`,
    };
  }

  if (password.length > maxLength) {
    return {
      isValid: false,
      error: `Password must be no more than ${maxLength} characters long`,
    };
  }

  return { isValid: true };
};
