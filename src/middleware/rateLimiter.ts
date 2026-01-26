import { Request, Response, NextFunction } from 'express';
import { RequestCounts, RateLimitConfig } from '../types';

export class RateLimiter {
  private requestCounts: RequestCounts = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    this.startResetInterval();
  }

  private startResetInterval(): void {
    setInterval(() => {
      Object.keys(this.requestCounts).forEach((ip) => {
        this.requestCounts[ip] = 0;
      });
    }, this.config.windowMs);
  }

  public middleware = (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip || 'unknown';
    console.log('Rate limiter checking:', req.ip);
    // Update request count
    this.requestCounts[ip] = (this.requestCounts[ip] || 0) + 1;

    // Check rate limit
    if (this.requestCounts[ip] > this.config.maxRequests) {
      res.status(429).json({
        code: 429,
        status: 'Error',
        message: 'Rate limit exceeded.',
        data: null,
      });
      return;
    }

    next();
  };
}