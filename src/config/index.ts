import { RateLimitConfig } from '../types';

export const config = {
  port: process.env.PORT || 3000,
  rateLimit: {
    maxRequests: 20,
    windowMs: 60 * 1000, // 1 minute
  } as RateLimitConfig,
  timeout: 15000, // 15 seconds
};

export * from './services.config';