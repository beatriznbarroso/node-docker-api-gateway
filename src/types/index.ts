export interface ServiceConfig {
  route: string;
  target: string;
  rateLimit?: number;
  timeout?: number;
}

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RequestCounts {
  [ip: string]: number;
}