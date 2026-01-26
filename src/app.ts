import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config, services } from './config';
import { RateLimiter, timeoutMiddleware } from './middleware';
import { setupRoutes } from './routes';

const app = express();

// Initialize rate limiter
const rateLimiter = new RateLimiter(config.rateLimit);

// Middleware setup (order matters!)
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.disable('x-powered-by');

// Apply rate limiting and timeout
app.use(rateLimiter.middleware);
app.use(timeoutMiddleware(config.timeout));

// Setup service routes
setupRoutes(app, services);

// Start server
app.listen(config.port, () => {
  console.log(`API Gateway running on port ${config.port}`);
});

export default app;