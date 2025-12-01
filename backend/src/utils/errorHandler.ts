import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Response } from 'express';

/**
 * Prisma error codes
 * P2025: Record not found
 * P2002: Unique constraint violation
 * P2003: Foreign key constraint violation
 * P2004: Constraint violation on database
 */
export const enum PrismaErrorCode {
  RECORD_NOT_FOUND = 'P2025',
  UNIQUE_CONSTRAINT = 'P2002',
  FOREIGN_KEY_CONSTRAINT = 'P2003',
  CONSTRAINT_VIOLATION = 'P2004',
}

/**
 * Configuration for custom error messages
 */
export interface ErrorHandlerConfig {
  recordNotFound?: string;
  uniqueConstraint?: string;
  foreignKeyConstraint?: string;
  constraintViolation?: string;
  default?: string;
}

/**
 * Default error messages
 */
const DEFAULT_MESSAGES: Required<ErrorHandlerConfig> = {
  recordNotFound: 'Record not found',
  uniqueConstraint: 'A record with this value already exists',
  foreignKeyConstraint: 'Invalid reference to related record',
  constraintViolation: 'Database constraint violation',
  default: 'An error occurred while processing your request',
};

/**
 * Gets the field name from Prisma error meta
 */
const getFieldName = (error: PrismaClientKnownRequestError): string | null => {
  const target = error.meta?.target;
  if (Array.isArray(target) && target.length > 0) {
    return target[0] as string;
  }
  if (typeof target === 'string') return target;
  return null;
};

/**
 * Generic Prisma error handler
 * @param error - The error to handle
 * @param res - Express response object
 * @param customMessages - Custom error messages for different error types
 * @returns true if error was handled, false otherwise
 */
export const handlePrismaError = (
  error: unknown,
  res: Response,
  customMessages?: ErrorHandlerConfig
): boolean => {
  if (!(error instanceof PrismaClientKnownRequestError)) return false;

  const messages = { ...DEFAULT_MESSAGES, ...customMessages };

  switch (error.code) {
    case PrismaErrorCode.RECORD_NOT_FOUND:
      res.status(404).json({
        error: messages.recordNotFound,
      });
      return true;

    case PrismaErrorCode.UNIQUE_CONSTRAINT: {
      const field = getFieldName(error);
      const message = messages.uniqueConstraint;
      const errorMessage = field ? `${message}: ${field}` : message;

      res.status(409).json({
        error: errorMessage,
        field,
      });
      return true;
    }

    case PrismaErrorCode.FOREIGN_KEY_CONSTRAINT:
      res.status(400).json({
        error: messages.foreignKeyConstraint,
      });
      return true;

    case PrismaErrorCode.CONSTRAINT_VIOLATION:
      res.status(400).json({
        error: messages.constraintViolation,
      });
      return true;

    default:
      // Unknown Prisma error code
      res.status(500).json({
        error: messages.default,
        code: error.code,
      });
      return true;
  }
};

/**
 * Generic error handler that handles both Prisma and other errors
 * @param error - The error to handle
 * @param res - Express response object
 * @param customMessages - Custom error messages for Prisma errors
 * @param defaultMessage - Default message for non-Prisma errors
 * @param defaultStatus - Default HTTP status for non-Prisma errors
 * @param logError - Whether to log the error (default: true)
 */
export const handleError = (
  error: unknown,
  res: Response,
  customMessages?: ErrorHandlerConfig,
  defaultMessage = 'An error occurred while processing your request',
  defaultStatus = 500,
  logError = true
) => {
  // Log error for debugging/monitoring
  if (logError) console.error('Error:', error);

  // Try to handle as Prisma error first
  if (handlePrismaError(error, res, customMessages)) return;

  // Handle Error instances
  if (error instanceof Error) {
    res.status(defaultStatus).json({
      error: error.message || defaultMessage,
    });
    return;
  }

  // Fallback for unknown error types
  res.status(defaultStatus).json({
    error: defaultMessage,
  });
};
