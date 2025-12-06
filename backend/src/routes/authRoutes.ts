import { Router } from 'express';

import { AuthController } from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const authController = new AuthController();
const authRouter = Router();

// Public routes
authRouter.post('/login', (req, res) => authController.login(req, res));
authRouter.post('/signup', (req, res) => authController.signUp(req, res));

// Protected route - requires authentication
authRouter.get('/verify', authenticate, (req, res) => authController.verifyToken(req, res));

export default authRouter;
