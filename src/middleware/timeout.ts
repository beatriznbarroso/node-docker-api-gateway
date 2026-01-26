import { Request, Response, NextFunction } from 'express';

export const timeoutMiddleware = (timeoutMs: number) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    req.setTimeout(timeoutMs, () => {
      if (!res.headersSent) {
        res.status(504).json({
          code: 504,
          status: 'Error',
          message: 'Gateway timeout.',
          data: null,
        });
      }
      req.socket?.destroy();
    });

    next();
  };
};