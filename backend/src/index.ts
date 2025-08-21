import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import userRouter from './routes/userRoutes';

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('process.env.CORS_ORIGIN', process.env.CORS_ORIGIN?.split(','));

app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.CORS_ORIGIN?.split(',') || [] : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
);

// Routes
app.use('/users', userRouter);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'Rediflix API is running' });
});

const protocol = process.env.PROTOCOL ?? 'http';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ?? 4000;

const server = app.listen(Number(port), () => {
  console.log(`⚡️ Server is running on ${protocol}://${host}:${port}`);
  console.log(`🔄 Endpoint: ${protocol}://${host}:${port}`);
});

server.on('error', (error) => {
  console.error(
    '❌ Failed to start server:',
    error instanceof Error ? error.message : 'Unknown error'
  );
  process.exit(1);
});

export default app;
